import chalk from 'chalk';
import path from 'path';
import AppGenerator from '../app/index.js';

export default class CommandGenerator extends AppGenerator {
  /* ---------------------------------------------------------------------- */
  /*  PROMPTING                                                            */
  /* ---------------------------------------------------------------------- */

  async prompting() {
    this.log(`Running ${chalk.red('COMMAND')} generator!`);

    // 1) Prompt base settings (esclude injectParams e advConfig)
    /** @type {import('../../types.js').Props} */
    const props = await this._askRequiredSettings({ exclude: ['injectParams', 'advConfig', 'version'] });

    /* ------------------------------------------------------------------ */
    /*  POST‑PROCESS                                                     */
    /* ------------------------------------------------------------------ */

    // Normalizza dependencies
    props.dependencies = (props.dependencies.toString().match(/[^ ]+/g) || []);
    props.dependenciesType = [...props.dependencies];

    // Aggiunge typings specifici in modalità TypeScript
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

    // Prepara stringhe utili al template
    props.dependenciesType.unshift('');
    props.dependencies.unshift('');
    props.dependenciesString = props.dependencies.map((d) => `'${d}'`);
    props.dependenciesString.shift();
    props.dependenciesString.push('');

    props.explanations = this._getPluginsExplanations();

    /* ------------------------------------------------------------------ */
    /*  Salva in this.props per i task successivi                         */
    /* ------------------------------------------------------------------ */

    this.props = props;
  }

  /* ---------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* ---------------------------------------------------------------------- */

  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tplContext = { ...this.props, props: this.props };

    /* -------------------------------- TS -------------------------------- */
    if (this.props.typescript) {
      this.destinationRoot(path.join('./plugins-ts', this.props.pluginname));
      const pluginCommandFilename = `${this.props.pluginname}PluginCommand.ts`;

      // Template TS
      this.fs.copyTpl(
        this.templatePath('src/PluginCommandTemplate.ts'),
        this.destinationPath(`src/${pluginCommandFilename}`),
        tplContext
      );
      this.log(chalk.green(`Written file: ${pluginCommandFilename}`));

      // libs/ (dummy)
      this.fs.copyTpl(this.templatePath('READMELIBS.txt'), this.destinationPath('libs/README.txt'), tplContext);
      this.log(chalk.green('Created folder libs'));

      // Config / typings comuni
      this.fs.copyTpl(this.templatePath(`${basePath}.babelrc`), this.destinationPath('.babelrc'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}.eslintrc`), this.destinationPath('.eslintrc'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}global.d.ts`), this.destinationPath('global.d.ts'), tplContext);
      this.fs.copyTpl(this.templatePath(`${interfacePath}Interfaces.ts`), this.destinationPath('Interfaces.ts'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}templatepackage.json`), this.destinationPath('package.json'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}postcss.config.js`), this.destinationPath('postcss.config.js'), tplContext);
      this.fs.copyTpl(this.templatePath(`${basePath}tsconfig.json`), this.destinationPath('tsconfig.json'), tplContext);
      this.fs.copyTpl(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'), tplContext);

      this.log(chalk.green('TypeScript scaffolding completed'));
    }

    /* ------------------------------ JS PLAIN ---------------------------- */
    if (!this.props.typescript) {
      this.destinationRoot(path.join('./plugins', this.props.pluginname));
      const pluginCommandFilename = `${this.props.pluginname}PluginCommand.js`;

      this.fs.copyTpl(
        this.templatePath('PluginCommandTemplate.js'),
        this.destinationPath(pluginCommandFilename),
        tplContext
      );
      this.log(chalk.green(`Written file: ${pluginCommandFilename}`));

      // libs/
      this.fs.copyTpl(this.templatePath('READMELIBS.txt'), this.destinationPath('libs/README.txt'), tplContext);
      this.log(chalk.green('Created folder libs'));
    }
  }
}
