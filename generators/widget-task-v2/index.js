import chalk from 'chalk';
import path from 'path';
import AppGenerator from '../app/index.js';

export default class WidgetTaskV2Generator extends AppGenerator {
  async prompting() {
    this.log(`Running ${chalk.red('WIDGET TASK V2')} generator!`);

    const props = await this._askRequiredSettings({
      exclude: ['requireRefresh', 'injectParams', 'advConfig'],
      minVersion: '2.7.0'
    });

    props.folderName = this.appname;
    props.plugindirective = `${props.pluginname}Directive`;

    props.dependencies = (props.dependencies.toString().match(/[^ ]+/g) || []);
    props.dependenciesType = [...props.dependencies];

    if (props.typescript) {
      props.dependenciesType = props.dependencies.map((dep) => {
        switch (dep) {
          case '$uibModal': return '$uibModal: angular.ui.bootstrap.IModalService';
          case 'moment': return 'moment: IMoment';
          case 'params': return 'params: IRouteParams';
          case '$document': return '$document: angular.IDocumentService';
          case '$window': return '$window: angular.IWindowService';
          case '$rootScope': return '$rootScope: angular.IRootScopeService';
          case '$http': return '$http: angular.IHttpService';
          case '$filter': return '$filter: angular.IFilterService';
          case '$timeout': return '$timeout: angular.ITimeoutService';
          case '_': return '_: LoDashStatic';
          case '$q': return '$q: angular.IQService';
          default: return dep;
        }
      });
    }

    props.dependenciesType.unshift('');
    props.dependencies.unshift('');
    props.dependenciesString = props.dependencies.map((d) => `'${d}'`);
    props.dependenciesString.shift();
    props.dependenciesString.push('');

    props.explanations = this._getPluginsExplanations();
    this.props = props;
  }

  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tpl = { ...this.props, props: this.props };

    if (this.props.typescript) {
      this.destinationRoot(path.join('./plugins-ts', this.props.pluginname));
      const tsFiles = [
        ['src/PluginWidgetTaskV2Template.ts', `src/${this.props.pluginname}.ts`],
        ['src/PluginWidgetTaskV2Template.html', `src/${this.props.pluginname}.html`],
        ['src/PluginWidgetTaskV2TemplateDirective.ts', `src/${this.props.plugindirective}.ts`],
        ['src/PluginWidgetTaskV2Template.css', `src/${this.props.pluginname}.css`],
        ['READMELIBS.txt', 'libs/README.txt']
      ];
      tsFiles.forEach(([src, dest]) => {
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tpl);
        this.log(chalk.green(`Written file: ${dest}`));
      });

      const common = [
        [`${basePath}.babelrc`, '.babelrc'],
        [`${basePath}.eslintrc`, '.eslintrc'],
        [`${basePath}global.d.ts`, 'global.d.ts'],
        [`${interfacePath}Interfaces.ts`, 'Interfaces.ts'],
        [`${basePath}templatepackage.json`, 'package.json'],
        [`${basePath}postcss.config.js`, 'postcss.config.js'],
        [`${basePath}tsconfig.json`, 'tsconfig.json'],
        ['webpack.config.js', 'webpack.config.js']
      ];
      common.forEach(([src, dest]) => {
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tpl);
      });
    } else {
      this.destinationRoot(path.join('./plugins', this.props.pluginname));
      const jsFiles = [
        ['PluginWidgetTaskV2Template.js', `${this.props.pluginname}.js`],
        ['PluginWidgetTaskV2Template.html', `${this.props.pluginname}.html`],
        ['PluginWidgetTaskV2TemplateDirective.js', `${this.props.plugindirective}.js`],
        ['PluginWidgetTaskV2Template.css', `${this.props.pluginname}.css`],
        ['READMELIBS.txt', 'libs/README.txt']
      ];
      jsFiles.forEach(([src, dest]) => {
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tpl);
        this.log(chalk.green(`Written file: ${dest}`));
      });
    }
  }
}
