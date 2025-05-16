import chalk from 'chalk';
import path from 'path';
import AppGenerator from '../app/index.js';

export default class WidgetTaskGenerator extends AppGenerator {
  async prompting() {
    this.log(`Running ${chalk.red('WIDGET TASK')} generator!`);

    /** @type {import('../../types.js').Props} */
    const props = await this._askRequiredSettings({ exclude: ['requireRefresh', 'injectParams', 'advConfig'] });

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
        ['src/PluginWidgetTaskTemplate.ts', `src/${this.props.pluginname}.ts`],
        ['src/PluginWidgetTaskTemplate.html', `src/${this.props.pluginname}.html`],
        ['src/PluginWidgetTaskTemplateDirective.ts', `src/${this.props.plugindirective}.ts`],
        ['src/PluginWidgetTaskTemplate.css', `src/${this.props.pluginname}.css`],
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
        ['PluginWidgetTaskTemplate.js', `${this.props.pluginname}.js`],
        ['PluginWidgetTaskTemplate.html', `${this.props.pluginname}.html`],
        ['PluginWidgetTaskTemplateDirective.js', `${this.props.plugindirective}.js`],
        ['PluginWidgetTaskTemplate.css', `${this.props.pluginname}.css`],
        ['READMELIBS.txt', 'libs/README.txt']
      ];
      jsFiles.forEach(([src, dest]) => {
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tpl);
        this.log(chalk.green(`Written file: ${dest}`));
      });
    }
  }

}
