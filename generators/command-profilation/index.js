import chalk from 'chalk';
import path from 'path';
import AppGenerator from '../app/index.js';

export default class CommandProfilationGenerator extends AppGenerator {
  /* ---------------------------------------------------------------------- */
  /*  LIFECYCLE HOOKS                                                       */
  /* ---------------------------------------------------------------------- */

  initializing() {
    this.log(`Running ${chalk.red('COMMAND PROFILATION')} generator!`);
  }

  /* ---------------------------------------------------------------------- */
  /*  PROMPTING                                                            */
  /* ---------------------------------------------------------------------- */

  async prompting() {
    // Prompt base settings – exclude injectParams, requireRefresh, advConfig – override minVersion default 2.2.0
    const prompts = this._requiredSettings({
      exclude: ['injectParams', 'requireRefresh', 'advConfig'],
      minVersion: '2.2.0'
    });

    const props = await this._getResolvedValues(prompts);

    // ---- post‑process dependencies ------------------------------------ //
    props.dependencies = (props.dependencies.toString().match(/[^ ]+/g) || []);
    props.dependenciesType = [...props.dependencies];

    if (props.typescript) {
      props.dependenciesType = props.dependencies.map((dep) => {
        switch (dep) {
          case '$uibModal':
            return '$uibModal: angular.ui.bootstrap.IModalService';
          case 'moment':
            return 'moment: IMoment';
          case 'params':
            return 'params: IRouteParams';
          case '$document':
            return '$document: angular.IDocumentService';
          case '$window':
            return '$window: angular.IWindowService';
          case '$rootScope':
            return '$rootScope: angular.IRootScopeService';
          case '$http':
            return '$http: angular.IHttpService';
          case '$filter':
            return '$filter: angular.IFilterService';
          case '$timeout':
            return '$timeout: angular.ITimeoutService';
          case '_':
            return '_: LoDashStatic';
          case '$q':
            return '$q: angular.IQService';
          default:
            return dep;
        }
      });
    }

    // Strings utili per i template
    props.dependenciesType.unshift('');
    props.dependencies.unshift('');
    props.dependenciesString = props.dependencies.map((d) => `'${d}'`);
    props.dependenciesString.shift();
    props.dependenciesString.push('');

    props.explanations = this._getPluginsExplanations();
    this.props = props;
  }

  /* ---------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* ---------------------------------------------------------------------- */

  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tplContext = { ...this.props, props: this.props };


    /* ----------------------------- TypeScript --------------------------- */
    if (this.props.typescript) {
      this.destinationRoot(path.join('./plugins-ts', this.props.pluginname));
      const fileName = `${this.props.pluginname}PluginCommandProfilation.ts`;

      // template TS
      this.fs.copyTpl(
        this.templatePath('src/PluginCommandProfilationTemplate.ts'),
        this.destinationPath(`src/${fileName}`),
        tplContext
      );
      this.log(chalk.green(`Written file: ${fileName}`));

      // libs folder dummy
      this.fs.copyTpl(
        this.templatePath('READMELIBS.txt'),
        this.destinationPath('libs/README.txt'),
        tplContext
      );
      this.log(chalk.green('Created folder libs'));

      // common config / typings
      this.fs.copyTpl(this.templatePath(`${basePath}.babelrc`), this.destinationPath('.babelrc'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}.eslintrc`), this.destinationPath('.eslintrc'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}global.d.ts`), this.destinationPath('global.d.ts'), tplContext);
      this.fs.copyTpl(this.templatePath(`${interfacePath}Interfaces.ts`), this.destinationPath('Interfaces.ts'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}templatepackage.json`), this.destinationPath('package.json'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}postcss.config.js`), this.destinationPath('postcss.config.js'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}tsconfig.json`), this.destinationPath('tsconfig.json'), tplContext);
      this.fs.copyTpl(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'), tplContext);
    }

    /* ------------------------------ JS Plain ---------------------------- */
    if (!this.props.typescript) {
      this.destinationRoot(path.join('./plugins', this.props.pluginname));
      const fileName = `${this.props.pluginname}PluginCommandProfilation.js`;

      this.fs.copyTpl(
        this.templatePath('PluginCommandProfilationTemplate.js'),
        this.destinationPath(fileName),
        tplContext
      );
      this.log(chalk.green(`Written file: ${fileName}`));

      // libs folder
      this.fs.copyTpl(
        this.templatePath('READMELIBS.txt'),
        this.destinationPath('libs/README.txt'),
        tplContext
      );
      this.log(chalk.green('Created folder libs'));
    }
  }
}
