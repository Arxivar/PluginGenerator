import chalk from 'chalk';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import AppGenerator from '../app/index.js';

/* -------------------------------------------------------------------------- */
/*  UTILS                                                                     */
/* -------------------------------------------------------------------------- */

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/* -------------------------------------------------------------------------- */
/*  GENERATOR                                                                 */
/* -------------------------------------------------------------------------- */

export default class LinkWorkflowV2Generator extends AppGenerator {
  initializing() {
    this.log(`Running ${chalk.red('LINK WORKFLOW V2')} generator!`);
  }

  /* ---------------------------------------------------------------------- */
  /*  PROMPTING (complex chain w/ loops)                                    */
  /* ---------------------------------------------------------------------- */
  async prompting() {
    /* --------- base required settings ---------------------------------- */
    const promptsRequired = this._linkSettings({
      exclude: ['requireRefresh', 'injectParams', 'typescript'],
      minVersion: '2.5.0'
    });

    /* --------- advanced & parameter prompts ---------------------------- */
    const advancedPrompts = this._advancedConfigSettings();
    const inQuestion = this._inputQuestion();
    const outQuestion = this._outputQuestion();
    const inParamPrompt = this._inputParameter();
    const outParamPrompt = this._outputParameter();

    /* --------- helper recursive loops ---------------------------------- */
    const loopParams = async (promptSet, targetArray) => {
      const ans = await this.prompt(promptSet);
      if (!ans.repeat) return ans;
      targetArray.push({ propertyName: ans.propertyName, propertyType: ans.propertyType });
      return loopParams(promptSet, targetArray);
    };

    /* --------- gather data step‑by‑step --------------------------------- */
    this.props = await this._getResolvedValues(promptsRequired);

    // input params decision
    const inDecision = await this.prompt(inQuestion);
    this.props = { ...this.props, ...inDecision, inputParameters: [] };
    if (this.props.inParams) await loopParams(inParamPrompt, this.props.inputParameters);

    // output params decision
    const outDecision = await this.prompt(outQuestion);
    this.props = { ...this.props, ...outDecision, outputParameters: [] };
    if (this.props.outParams) await loopParams(outParamPrompt, this.props.outputParameters);

    // advanced config
    const adv = await this.prompt(advancedPrompts);
    this.props = { ...this.props, ...adv };

    /* --------- post‑process ------------------------------------------- */
    this._postProcessProps();
  }

  /* ---------------------------------------------------------------------- */
  /*  POST‑PROCESS PROPS                                                   */
  /* ---------------------------------------------------------------------- */
  _postProcessProps() {
    const p = this.props;

    p.folderName = this.appname;
    p.plugincontroller = `${p.pluginname}Ctrl`;

    p.dependencies = p.dependencies ? p.dependencies.toString().match(/[^ ]+/g) || [] : [];
    p.dependenciesType = [...p.dependencies];

    p.linkServicesFront = p.linkServicesFront || [];

    // GUIDs
    p.projectId = uuidv4();
    p.nestedProject = uuidv4();
    p.secondProjectId = uuidv4();
    p.guid = uuidv4();
    p.nestedGuid = uuidv4();
    p.presolutionGuid = uuidv4();

    // Comments for params when injectParams true
    p.paramsCommentDesc = '';
    p.paramsCommentEx = '';
    p.paramsCommentParams = '';
    p.paramsCommentParamsEx = '';

    /* ---- dependencies typing for TS & linkServicesFront typing -------- */
    if (p.typescriptLink) {
      p.linkServicesFrontType = (p.linkServicesFront || []).map(this._matchFrontTypeTs);
    }

    if (p.typescript) {
      p.dependenciesType = p.dependencies.map(this._matchDepTypeTs);
    }

    // prepend empty string for template convenience
    p.dependenciesType.unshift('');
    p.dependencies.unshift('');
    p.linkServicesFront.unshift('');

    // build string arrays for templates
    p.dependenciesString = p.dependencies.map((d) => `'${d}'`).concat('');
    p.linkServicesFrontString = (p.linkServicesFront || []).map((d) => `'${d}'`).concat('');

    p.explanations = this._getPluginsExplanations();

    this.props = p; // update
  }

  /* ---------------- type mappers ---------------- */
  _matchDepTypeTs(dep) {
    const map = {
      '$uibModal': '$uibModal: angular.ui.bootstrap.IModalService',
      moment: 'moment: IMoment',
      params: 'params: IRouteParams',
      '$document': '$document: angular.IDocumentService',
      '$window': '$window: angular.IWindowService',
      '$rootScope': '$rootScope: angular.IRootScopeService',
      '$http': '$http: angular.IHttpService',
      '$filter': '$filter: angular.IFilterService',
      '$timeout': '$timeout: angular.ITimeoutService',
      _: '_: LoDashStatic',
      '$q': '$q: angular.IQService'
    };
    return map[dep] || dep;
  }

  _matchFrontTypeTs(dep) {
    const map = {
      '$uibModal': 'readonly $uibModal: angular.ui.bootstrap.IModalService',
      moment: 'readonly moment: IMoment',
      params: 'readonly params: IRouteParams',
      '$document': 'readonly $document: angular.IDocumentService',
      '$window': 'readonly $window: angular.IWindowService',
      '$rootScope': 'readonly $rootScope: angular.IRootScopeService',
      '$http': 'readonly $http: angular.IHttpService',
      '$filter': 'readonly $filter: angular.IFilterService',
      '$timeout': 'readonly $timeout: angular.ITimeoutService',
      _: 'readonly _: ILoDash',
      '$q': 'readonly $q: angular.IQService',
      arxivarResourceService: 'readonly arxivarResourceService: IArxivarResourceService',
      arxivarUserServiceCreator: 'readonly arxivarUserServiceCreator: IArxivarUserServiceCreator',
      arxivarRouteService: 'readonly arxivarRouteService: IArxivarRouteService',
      arxivarDocumentsService: 'readonly arxivarDocumentsService: IArxivarDocumentsService',
      arxivarNotifierService: 'readonly arxivarNotifierService: IArxivarNotifierService',
      workflowResourceService: 'readonly workflowResourceService: IWorkflowResourceService'
    };
    return map[dep] || dep;
  }

  /* ---------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* ---------------------------------------------------------------------- */
  writing() {
    const interfacePath = '../../../docs/frontend/';
    const basePath = '../../../';
    const tpl = { ...this.props, props: this.props };

    /* -------- base path plugins-link/<name> ---------------------------- */
    this.destinationRoot(path.join('./plugins-link', this.props.pluginname));

    // Helper to copy multiple files
    const copyMany = (pairs) => pairs.forEach(([src, dest]) => {
      this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), tpl);
      this.log(chalk.green(`Written file: ${dest}`));
    });

    /* ------------------------- BASIC C# ONLY --------------------------- */
    if (!this.props.advConfig) {
      copyMany([
        ['ClassTemplate.cs', `${this.props.pluginname}/${this.props.pluginname}.cs`],
        ['ClassLibraryTemplate.csproj', `${this.props.pluginname}/${this.props.pluginname}.csproj`],
        ['postbuild.bat', 'postbuild.bat'],
        ['solutionTemplate.sln', `${this.props.pluginname}.sln`]
      ]);
      this.log(chalk.green(`********** ${this.props.pluginname} created in plugins-link **********`));
      return;
    }

    /* ---------------------- ADVANCED CONFIG ---------------------------- */
    // Common C# part
    const csFiles = this.props.typescriptLink
      ? ['ClassLibraryTemplateAdvTs.csproj', 'prebuildAdvTs.bat', 'postbuildAdvTs.bat', 'solutionTemplateAdvTs.sln']
      : ['ClassLibraryTemplateAdvJs.csproj', 'postbuildAdvJs.bat', 'solutionTemplateAdvJs.sln'];

    copyMany([
      ['ClassTemplate.cs', `${this.props.pluginname}/${this.props.pluginname}.cs`],
      ...csFiles.map((f) => [f, f.replace('Template', '').replace('AdvTs', '').replace('AdvJs', '')])
        .map(([src, dest]) => [src, dest.replace('Template', '').replace('AdvTs', '').replace('AdvJs', '')])
    ]);

    /* ------------------- FRONTEND PART --------------------------------- */
    if (this.props.typescriptLink) {
      const tsFront = [
        ['scripts/src/WfmDesignerOperationTemplate.ts', `scripts/src/${this.props.pluginname}.ts`],
        ['scripts/src/WfmDesignerOperationTemplateTs.html', `scripts/src/${this.props.pluginname}.html`],
        ['scripts/src/WfmDesignerStyleTs.css', `scripts/src/${this.props.pluginname}.css`]
      ];
      copyMany(tsFront);

      const common = [
        [`${basePath}global.d.ts`, 'scripts/global.d.ts'],
        [`${interfacePath}Interfaces.ts`, 'scripts/Interfaces.ts'],
        ['.babelrc', '.babelrc'],
        ['.eslintrc', '.eslintrc'],
        ['package.json', 'package.json'],
        ['postcss.config.js', 'postcss.config.js'],
        ['tsconfig.json', 'tsconfig.json'],
        ['webpack.config.js', 'webpack.config.js']
      ];
      copyMany(common);

      this.log(chalk.green(`********** ${this.props.pluginname} created in plugins-link, run npm install there **********`));
    } else {
      // JS frontend
      const jsFront = [
        ['scripts/src/WfmDesignerOperationTemplate.js', `scripts/src/${this.props.pluginname}.js`],
        ['scripts/src/WfmDesignerOperationTemplateJs.html', `scripts/src/${this.props.pluginname}.html`],
        ['scripts/src/wfmDesignerStyleJs.css', `scripts/src/${this.props.pluginname}.css`]
      ];
      copyMany(jsFront);

      this.log(chalk.green(`********** ${this.props.pluginname} created in plugins-link **********`));
    }
  }
}
