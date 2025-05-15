import chalk from 'chalk';
import path from 'path';
import AppGenerator from '../app/index.js';

export default class RouteGenerator extends AppGenerator {
  /* -------------------------------------------------------------------- */
  /*  PROMPTING                                                           */
  /* -------------------------------------------------------------------- */
  async prompting() {
    this.log(`Running ${chalk.red('ROUTE')} generator!`);

    const props = await this._askRequiredSettings({
      exclude: ['requireRefresh', 'advConfig'],
      minVersion: '2.1.0'
    });

    /* --------------------- Post‑processing props ---------------------- */
    props.folderName = this.appname;
    props.plugincontroller = `${props.pluginname}Ctrl`;

    props.dependencies = (props.dependencies.toString().match(/[^ ]+/g) || []);
    props.dependenciesType = [...props.dependencies];

    props.paramsCommentDesc = '';
    props.paramsCommentEx = '';
    props.paramsCommentParams = '';
    props.paramsCommentParamsEx = '';

    props.explanations = this._getPluginsExplanations();

    if (props.injectParams) {
      props.dependencies.push('params');
      if (props.typescript) props.dependenciesType.push('params: IRouteParams');

      props.paramsCommentDesc = props.explanations.pluginRoute.inputdesc;
      props.paramsCommentEx = props.explanations.pluginRoute.inputeg;
      props.paramsCommentParams = props.explanations.pluginRoute.outputdesc;
      props.paramsCommentParamsEx = props.explanations.pluginRoute.outputeg;
    }

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

    this.props = props;
  }

  /* -------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* -------------------------------------------------------------------- */
  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tpl = { ...this.props, props: this.props };

    if (this.props.typescript) {
      this.destinationRoot(path.join('./plugins-ts', this.props.pluginname));

      const files = [
        ['src/PluginRouteTemplate.ts', `src/${this.props.pluginname}.ts`],
        ['src/PluginRouteTemplate.html', `src/${this.props.pluginname}.html`],
        ['src/PluginRouteTemplateCtrl.ts', `src/${this.props.plugincontroller}.ts`],
        ['src/PluginRouteTemplate.css', `src/${this.props.pluginname}.css`],
        ['READMELIBS.txt', 'libs/README.txt']
      ];
      files.forEach(([src, dest]) => {
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

      this.log(chalk.green(`********** ${this.props.pluginname} folder created into plugins-ts, run npm install there **********`));
    } else {
      /* --------------------------- Plain JS --------------------------- */
      this.destinationRoot(path.join('./plugins', this.props.pluginname));

      const files = [
        ['PluginRouteTemplate.js', `${this.props.pluginname}.js`],
        ['PluginRouteTemplate.html', `${this.props.pluginname}.html`],
        ['PluginRouteTemplateCtrl.js', `${this.props.plugincontroller}.js`],
        ['PluginRouteTemplate.css', `${this.props.pluginname}.css`],
        ['READMELIBS.txt', 'libs/README.txt']
      ];
      files.forEach(([src, dest]) => {
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tpl);
        this.log(chalk.green(`Written file: ${dest}`));
      });
    }
  }
}
