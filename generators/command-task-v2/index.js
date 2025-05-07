import chalk from 'chalk';
import path from 'path';
import AppGenerator from '../app/index.js';

export default class CommandTaskV2Generator extends AppGenerator {
  /* ---------------------------------------------------------------------- */
  /*  LIFECYCLE HOOKS                                                       */
  /* ---------------------------------------------------------------------- */

  initializing() {
    this.log(`Running ${chalk.red('COMMAND TASK V2')} generator!`);
  }

  /* ---------------------------------------------------------------------- */
  /*  PROMPTING                                                            */
  /* ---------------------------------------------------------------------- */

  async prompting() {
    const prompts = this._requiredSettings({
      exclude: ['injectParams', 'advConfig'],
      minVersion: '2.12.0' // default
    });

    const props = await this._getResolvedValues(prompts);

    // Post‑process dependencies ----------------------------------------- //
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

  /* ---------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* ---------------------------------------------------------------------- */

  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tplContext = { ...this.props, props: this.props };

    if (this.props.typescript) {
      // ------------------------- TypeScript ----------------------------- //
      this.destinationRoot(path.join('./plugins-ts', this.props.pluginname));
      const fileName = `${this.props.pluginname}PluginCommandTask.ts`;

      this.fs.copyTpl(
        this.templatePath('src/PluginCommandTaskTemplate.ts'),
        this.destinationPath(`src/${fileName}`),
        tplContext
      );
      this.log(chalk.green(`Written file: ${fileName}`));

      this.fs.copyTpl(
        this.templatePath('READMELIBS.txt'),
        this.destinationPath('libs/README.txt'),
        tplContext
      );
      this.log(chalk.green('Created folder libs'));

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
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tplContext);
      });
    } else {
      // --------------------------- Plain JS ------------------------------ //
      this.destinationRoot(path.join('./plugins', this.props.pluginname));
      const fileName = `${this.props.pluginname}PluginCommandTask.js`;

      this.fs.copyTpl(
        this.templatePath('PluginCommandTaskTemplate.js'),
        this.destinationPath(fileName),
        tplContext
      );
      this.log(chalk.green(`Written file: ${fileName}`));

      this.fs.copyTpl(
        this.templatePath('READMELIBS.txt'),
        this.destinationPath('libs/README.txt'),
        tplContext
      );
      this.log(chalk.green('Created folder libs'));
    }
  }
}
