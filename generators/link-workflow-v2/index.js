import chalk from 'chalk';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import AppGenerator, { linkServices as linkServicesConst, linkServicesFront as linkServicesFrontConst } from '../app/index.js';
import { select } from 'inquirer-select-pro';
import {
  input as inputPrompt,
  select as selectPrompt,
  confirm as confirmPrompt,
} from '@inquirer/prompts';


//@ts-ignore
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};


export default class extends AppGenerator {
  /* -------------------------------------------------------------------- */
  /*  PROMPTING                                */
  /* -------------------------------------------------------------------- */
  async prompting() {
    this.log(`Running ${chalk.red('LINK WORKFLOW V2')} generator!`);

    /* ---------- 1. SETTINGS DI BASE ----------------------------------- */
    const baseProps = await this._askRequiredSettings({
      exclude: ['minVersion', 'requireRefresh', 'injectParams', 'dependencies', 'typescript'],
      minVersion: '2.5.0',
    });

    this.props = { ...this.props, ...baseProps };

    /* ---------- 2. BACK-END SERVICES ---------------------------------- */
    const backendOpts = linkServicesConst.map((s) => ({ name: s, value: s }));
    this.props.linkServices = await select({
      message: 'Select backend services:',
      confirmDelete: true,
      multiple: true,
      pageSize: 12,
      clearInputWhenSelected: true,
      options: async (input = '') =>
        input
          ? backendOpts.filter((o) =>
            o.name.toLowerCase().includes(input.toLowerCase()),
          )
          : backendOpts,
    });

    /* ---------- 3. PARAMETRI INPUT ------------------------------------ */
    this.props.inParams = await confirmPrompt({
      message: 'Add INPUT parameters?',
      default: false,
    });

    this.props.inputParameters = [];
    if (this.props.inParams) {
      await this._collectInputParameters();
    }

    /* ---------- 4. PARAMETRI OUTPUT ----------------------------------- */
    this.props.outParams = await confirmPrompt({
      message: 'Add OUTPUT parameters?',
      default: false,
    });

    this.props.outputParameters = [];
    if (this.props.outParams) {
      await this._collectOutputParameters();
    }

    /* ---------- 5. ADVANCED SETTINGS ---------------------------------- */
    this.props.advConfig = await confirmPrompt({
      message: 'Would you like advanced configuration?',
      default: false,
    });

    if (this.props.advConfig) {
      const frontOpts = linkServicesFrontConst.map((s) => ({
        name: s,
        value: s,
      }));
      this.props.linkServicesFront = await select({
        message: 'Select frontend services:',
        confirmDelete: true,
        multiple: true,
        required: false,
        pageSize: 12,
        defaultValue: ['workflowResourceService', '_'],
        clearInputWhenSelected: true,
        options: async (input = '') =>
          input
            ? frontOpts.filter((o) =>
              o.name.toLowerCase().includes(input.toLowerCase()),
            )
            : frontOpts,
      });

      this.props.typescriptLink = await confirmPrompt({
        message: 'Use TypeScript?',
        default: false,
      });
    }

    /* ---------- 6. POST-PROCESSING ----------------- */
    this.props.folderName = this.appname;
    this.props.plugincontroller = this.props.pluginname + 'Ctrl';
    this.props.dependencies =
      this.props.dependencies?.toString().match(/[^ ]+/g) || [];
    this.props.dependenciesType =
      this.props.dependencies?.toString().match(/[^ ]+/g) || [];
    this.props.linkServicesFront = this.props.linkServicesFront || [];
    this.props.paramsCommentDesc = '';
    this.props.paramsCommentEx = '';
    this.props.paramsCommentParams = '';
    this.props.paramsCommentParamsEx = '';
    this.props.projectId = uuidv4();
    this.props.nestedProject = uuidv4();
    this.props.secondProjectId = uuidv4();
    this.props.guid = uuidv4();
    this.props.nestedGuid = uuidv4();
    this.props.presolutionGuid = uuidv4();
    this.props.explanations = this._getPluginsExplanations();

    if (this.props.typescriptLink) {
      this.props.linkServicesFrontType =
        this.props.linkServicesFront?.map(matchType) || [];

      function matchType(i) {
        switch (i) {
          case '$uibModal':
            return 'readonly $uibModal:angular.ui.bootstrap.IModalService';
          case 'moment':
            return 'readonly moment: IMoment';
          case 'params':
            return 'readonly params: IRouteParams';
          case '$document':
            return 'readonly $document: angular.IDocumentService';
          case '$window':
            return 'readonly $window: angular.IWindowService';
          case '$rootScope':
            return 'readonly $rootScope: angular.IRootScopeService';
          case '$http':
            return 'readonly $http: angular.IHttpService';
          case '$filter':
            return 'readonly $filter: angular.IFilterService';
          case '$timeout':
            return 'readonly $timeout: angular.ITimeoutService';
          case '_':
            return 'readonly _: ILoDash';
          case '$q':
            return 'readonly $q: angular.IQService';
          case 'arxivarResourceService':
            return 'readonly arxivarResourceService: IArxivarResourceService';
          case 'arxivarUserServiceCreator':
            return 'readonly arxivarUserServiceCreator: IArxivarUserServiceCreator';
          case 'arxivarRouteService':
            return 'readonly arxivarRouteService: IArxivarRouteService';
          case 'arxivarDocumentsService':
            return 'readonly arxivarDocumentsService: IArxivarDocumentsService';
          case 'arxivarNotifierService':
            return 'readonly arxivarNotifierService: IArxivarNotifierService';
          case 'workflowResourceService':
            return 'readonly workflowResourceService: IWorkflowResourceService';
          default:
            return i;
        }
      }
    }

    //helpers per template
    this.props.linkServicesFrontJs = _.cloneDeep(this.props.linkServicesFront);
    this.props.dependenciesType.unshift('');
    this.props.dependencies.unshift('');
    this.props.linkServicesFront.unshift('');
    this.props.dependenciesString = this.props.dependencies.map((i) => `'${i}'`);
    this.props.linkServicesFrontString = this.props.linkServicesFront.map(
      (i) => `'${i}'`,
    );
    this.props.linkServicesFrontString.shift();
    this.props.linkServicesFrontString.push('');
    this.props.dependenciesString.shift();
    this.props.dependenciesString.push('');
  }

  /* -------------------------------------------------------------------- */
  /*  HELPERS 
  /* -------------------------------------------------------------------- */
  async _collectInputParameters() {
    const types = ['string', 'int', 'bool', 'DateTime', 'object[]', 'object[,]'].map(
      (t) => ({ name: t, value: t }),
    );

    while (true) {
      const propertyName = await inputPrompt({
        message: 'INPUT property name',
        validate: (v) => (v.trim() ? true : 'Cannot be empty'),
      });

      const propertyType = await selectPrompt({
        message: 'INPUT property type',
        choices: types,
        default: 'string',
      });

      const propertyRequired = await confirmPrompt({
        message: 'INPUT property required?',
        default: false,
      });

      this.props.inputParameters.push({ propertyName, propertyType, propertyRequired });

      const again = await confirmPrompt({
        message: 'Add another INPUT parameter?',
        default: false,
      });
      if (!again) break;
    }
  }

  async _collectOutputParameters() {
    const types = ['string', 'int', 'bool', 'DateTime', 'object[]', 'object[,]'].map(
      (t) => ({ name: t, value: t }),
    );

    while (true) {
      const propertyName = await inputPrompt({
        message: 'OUTPUT property name',
        validate: (v) => (v.trim() ? true : 'Cannot be empty'),
      });

      const propertyType = await selectPrompt({
        message: 'OUTPUT property type',
        choices: types,
        default: 'string',
      });

      const propertyRequired = await confirmPrompt({
        message: 'OUTPUT property required?',
        default: false,
      });

      this.props.outputParameters.push({ propertyName, propertyType, propertyRequired });

      const again = await confirmPrompt({
        message: 'Add another OUTPUT parameter?',
        default: false,
      });
      if (!again) break;
    }
  }


  /* -------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* -------------------------------------------------------------------- */
  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tpl = { ...this.props, props: this.props };

    if (!this.props.advConfig) {
      this.destinationRoot(path.join('./plugins-link', this.props.pluginname));

      const classFilename = this.props.pluginname + '.cs';
      const classLibraryFilename = this.props.pluginname + '.csproj';
      const solution = this.props.pluginname + '.sln';
      const pluginName = this.props.pluginname;

      this.fs.copyTpl(this.templatePath('ClassTemplate.cs'), this.destinationPath(this.props.pluginname + '/' + classFilename), tpl);
      this.log(chalk.green('Written file: ' + classFilename));

      this.fs.copyTpl(this.templatePath('ClassLibraryTemplate.csproj'), this.destinationPath(this.props.pluginname + '/' + classLibraryFilename), tpl);
      this.log(chalk.green('Written file: ' + classLibraryFilename));

      this.fs.copyTpl(this.templatePath('postbuild.bat'), this.destinationPath('postbuild.bat'), tpl);
      this.log(chalk.green('Written file: postbuild.bat'));

      this.fs.copyTpl(this.templatePath('solutionTemplate.sln'), this.destinationPath(solution), tpl);
      this.log(chalk.green('Written file: ' + solution));
      this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-link **********'));
    }

    if (this.props.advConfig && this.props.typescriptLink) {
      this.destinationRoot(path.join('./plugins-link', this.props.pluginname));
      const classFilename = this.props.pluginname + '.cs';
      const classLibraryFilename = this.props.pluginname + '.csproj';
      const solution = this.props.pluginname + '.sln';
      const pluginName = this.props.pluginname;

      this.fs.copyTpl(this.templatePath('ClassTemplate.cs'), this.destinationPath(this.props.pluginname + '/' + classFilename), tpl);
      this.log(chalk.green('Written file: ' + classFilename));

      this.fs.copyTpl(this.templatePath('ClassLibraryTemplateAdvTs.csproj'), this.destinationPath(this.props.pluginname + '/' + classLibraryFilename), tpl);
      this.log(chalk.green('Written file: ' + classLibraryFilename));

      this.fs.copyTpl(this.templatePath('prebuildAdvTs.bat'), this.destinationPath('prebuild.bat'), tpl);
      this.log(chalk.green('Written file: prebuild.bat'));

      this.fs.copyTpl(this.templatePath('postbuildAdvTs.bat'), this.destinationPath('postbuild.bat'), tpl);
      this.log(chalk.green('Written file: postbuild.bat'));

      this.fs.copyTpl(this.templatePath('solutionTemplateAdvTs.sln'), this.destinationPath(solution), tpl);
      this.log(chalk.green('Written file: ' + solution));

      // TS Frontend
      const controllerFilename = this.props.pluginname + '.ts';
      const pageLinkFilename = this.props.pluginname + '.html';
      const styleFilename = this.props.pluginname + '.css';

      this.fs.copyTpl(this.templatePath('scripts/src/WfmDesignerOperationTemplate.ts'), this.destinationPath('scripts/src/' + controllerFilename), tpl);
      this.log(chalk.green('Written file: ' + controllerFilename));

      this.fs.copyTpl(this.templatePath('scripts/src/WfmDesignerOperationTemplateTs.html'), this.destinationPath('scripts/src/' + pageLinkFilename), tpl);
      this.log(chalk.green('Written file: ' + pageLinkFilename));

      this.fs.copyTpl(this.templatePath('scripts/src/WfmDesignerStyleTs.css'), this.destinationPath('scripts/src/' + styleFilename), tpl);
      this.log(chalk.green('Written file: ' + styleFilename));

      this.fs.copyTpl(this.templatePath(basePath + 'global.d.ts'), this.destinationPath('scripts/global.d.ts'), tpl);
      this.log(chalk.green('Written file: global.d.ts'));

      this.fs.copyTpl(this.templatePath(interfacePath + 'Interfaces.ts'), this.destinationPath('scripts/Interfaces.ts'), tpl);
      this.log(chalk.green('Written file: Interfaces.ts'));

      this.fs.copyTpl(this.templatePath('.babelrc'), this.destinationPath('.babelrc'), tpl);
      this.log(chalk.green('Written file: .babelrc'));

      this.fs.copyTpl(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'), tpl);
      this.log(chalk.green('Written file: .eslintrc'));

      this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), tpl);
      this.log(chalk.green('Written file: package.json'));

      this.fs.copyTpl(this.templatePath('postcss.config.js'), this.destinationPath('postcss.config.js'), tpl);
      this.log(chalk.green('Written file: postcss.config.js'));

      this.fs.copyTpl(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'), tpl);
      this.log(chalk.green('Written file: tsconfig.json'));

      this.fs.copyTpl(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'), tpl);
      this.log(chalk.green('Written file: webpack.config.js'));
      this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-link, run npm install there **********'));
    }

    if (this.props.advConfig && !this.props.typescriptLink) {
      this.destinationRoot(path.join('./plugins-link', this.props.pluginname));
      const classFilename = this.props.pluginname + '.cs';
      const classLibraryFilename = this.props.pluginname + '.csproj';
      const solution = this.props.pluginname + '.sln';
      const pluginName = this.props.pluginname;

      this.fs.copyTpl(this.templatePath('ClassTemplate.cs'), this.destinationPath(this.props.pluginname + '/' + classFilename), tpl);
      this.log(chalk.green('Written file: ' + classFilename));

      this.fs.copyTpl(this.templatePath('ClassLibraryTemplateAdvJs.csproj'), this.destinationPath(this.props.pluginname + '/' + classLibraryFilename), tpl);
      this.log(chalk.green('Written file: ' + classLibraryFilename));

      this.fs.copyTpl(this.templatePath('postbuildAdvJs.bat'), this.destinationPath('postbuild.bat'), tpl);
      this.log(chalk.green('Written file: postbuild.bat'));

      this.fs.copyTpl(this.templatePath('solutionTemplateAdvJs.sln'), this.destinationPath(solution), tpl);
      this.log(chalk.green('Written file: ' + solution));

      // JS frontend
      const controllerFilename = this.props.pluginname + '.js';
      const pageLinkFilename = this.props.pluginname + '.html';
      const styleFilename = this.props.pluginname + '.css';

      this.fs.copyTpl(this.templatePath('scripts/src/WfmDesignerOperationTemplate.js'), this.destinationPath('scripts/src/' + controllerFilename), tpl);
      this.log(chalk.green('Written file: ' + controllerFilename));

      this.fs.copyTpl(this.templatePath('scripts/src/WfmDesignerOperationTemplateJs.html'), this.destinationPath('scripts/src/' + pageLinkFilename), tpl);
      this.log(chalk.green('Written file: ' + pageLinkFilename));

      this.fs.copyTpl(this.templatePath('scripts/src/wfmDesignerStyleJs.css'), this.destinationPath('scripts/src/' + styleFilename), tpl);
      this.log(chalk.green('Written file: ' + styleFilename));

      this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-link **********'));
    }
  }
}