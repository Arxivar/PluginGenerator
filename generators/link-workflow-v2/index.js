import chalk from 'chalk';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import AppGenerator, { linkServices as linkServicesConst } from '../app/index.js';
import { select } from 'inquirer-select-pro';



/* eslint-disable func-names */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
/* eslint-enable func-names */

export default class extends AppGenerator {
  initializing() {
    this.log(`Running ${chalk.red('LINK WORKFLOW V2')} generator!`);
  }

  async prompting() {
    // --- SETTINGS ------------------------------------------------------
    const promptsRequiredSettings = this._linkSettings({
      exclude: ['requireRefresh', 'injectParams', 'typescript'],
      minVersion: '2.5.0'
    });

    const resolvedValue = this._getResolvedValues(promptsRequiredSettings);

    // Additional prompt groups (identical to original)
    const promptsAdvancedSettings = this._advancedConfigSettings();
    const promptsInputParameter = this._inputParameter();
    const promptsOutputParameter = this._outputParameter();
    const promptsInQuestion = this._inputQuestion();
    const promptsOutQuestion = this._outputQuestion();
    const that = this;

    // Recursive helpers (unchanged)
    const loopInputQuestion = () => {
      if (that.props.pluginname) {
        return that.prompt(promptsInputParameter).then((props) => {
          that.props.inputParameters.push({ propertyName: props.propertyName, propertyType: props.propertyType });
          return props.repeat ? loopInputQuestion() : that.prompt([]);
        });
      }
      return that.prompt([]);
    };

    const loopOutputQuestion = () => {
      if (that.props.pluginname) {
        return that.prompt(promptsOutputParameter).then((props) => {
          that.props.outputParameters.push({ propertyName: props.propertyName, propertyType: props.propertyType });
          return props.repeat ? loopOutputQuestion() : that.prompt([]);
        });
      }
      return that.prompt([]);
    };

    // Getting values --------------------------------
    return resolvedValue
      .then(async (_props) => {
        const selectedServices = await select({
          message: 'Select services:',
          multiple: true,
          required: true,
          pageSize: 12,
          options: linkServicesConst.map((s) => ({ name: s, value: s }))
        });
        that.props = { ...that.props, ..._props, linkServices: selectedServices };
      })
      .then((_props) => {
        that.props = { ...that.props, ..._props };
        return that.prompt(promptsInQuestion);
      })
      .then((_props) => {
        that.props = { ...that.props, ..._props };
        that.props.inputParameters = [];
        if (that.props.inParams) {
          return loopInputQuestion();
        }
      })
      .then((_props) => {
        that.props = { ...that.props, ..._props };
        return that.prompt(promptsOutQuestion);
      })
      .then((_props) => {
        that.props = { ...that.props, ..._props };
        that.props.outputParameters = [];
        if (that.props.outParams) {
          return loopOutputQuestion();
        }
      })
      .then((_props) => {
        that.props = { ...that.props, ..._props };
        return that.prompt(promptsAdvancedSettings);
      })
      .then((_props) => {
        that.props = { ...that.props, ..._props };
        // ---- Post‑processing ----------
        that.props.folderName = that.appname;
        that.props.plugincontroller = that.props.pluginname + 'Ctrl';
        that.props.dependencies = that.props.dependencies ? that.props.dependencies.toString().match(/[^ ]+/g) || [] : [];
        that.props.dependenciesType = that.props.dependencies ? that.props.dependencies.toString().match(/[^ ]+/g) || [] : [];
        that.props.inputParameters = that.props.inputParameters || [];
        that.props.outputParameter = that.props.outputParameter || [];
        that.props.linkServicesFront = that.props.linkServicesFront || [];
        that.props.paramsCommentDesc = '';
        that.props.paramsCommentEx = '';
        that.props.paramsCommentParams = '';
        that.props.paramsCommentParamsEx = '';
        that.props.projectId = uuidv4();
        that.props.nestedProject = uuidv4();
        that.props.secondProjectId = uuidv4();
        that.props.guid = uuidv4();
        that.props.nestedGuid = uuidv4();
        that.props.presolutionGuid = uuidv4();
        that.props.explanations = that._getPluginsExplanations();

        if (that.props.typescriptLink) {
          that.props.linkServicesFrontType = that.props.linkServicesFront.map(matchType) || [];
          // Inner matchType 
          function matchType(i) {
            switch (i) {
              case '$uibModal': return 'readonly $uibModal:angular.ui.bootstrap.IModalService';
              case 'moment': return 'readonly moment: IMoment';
              case 'params': return 'readonly params: IRouteParams';
              case '$document': return 'readonly $document: angular.IDocumentService';
              case '$window': return 'readonly $window: angular.IWindowService';
              case '$rootScope': return 'readonly $rootScope: angular.IRootScopeService';
              case '$http': return 'readonly $http: angular.IHttpService';
              case '$filter': return 'readonly $filter: angular.IFilterService';
              case '$timeout': return 'readonly $timeout: angular.ITimeoutService';
              case '_': return 'readonly _: ILoDash';
              case '$q': return 'readonly $q: angular.IQService';
              case 'arxivarResourceService': return 'readonly arxivarResourceService: IArxivarResourceService';
              case 'arxivarUserServiceCreator': return 'readonly arxivarUserServiceCreator: IArxivarUserServiceCreator';
              case 'arxivarRouteService': return 'readonly arxivarRouteService: IArxivarRouteService';
              case 'arxivarDocumentsService': return 'readonly arxivarDocumentsService: IArxivarDocumentsService';
              case 'arxivarNotifierService': return 'readonly arxivarNotifierService: IArxivarNotifierService';
              case 'workflowResourceService': return 'readonly workflowResourceService: IWorkflowResourceService';
              default: return i;
            }
          }
        }

        that.props.linkServicesFrontJs = _.cloneDeep(that.props.linkServicesFront);
        that.props.dependenciesType.unshift('');
        that.props.dependencies.unshift('');
        that.props.linkServicesFront.unshift('');
        that.props.dependenciesString = that.props.dependencies.map((i) => `'${i}'`) || [];
        that.props.linkServicesFrontString = that.props.linkServicesFront.map((i) => `'${i}'`) || [];
        that.props.linkServicesFrontString.shift();
        that.props.linkServicesFrontString.push('');
        that.props.dependenciesString.shift();
        that.props.dependenciesString.push('');
      });
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
