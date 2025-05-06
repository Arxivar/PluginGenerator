// AppGenerator.js – fully self‑contained, no external prompt plugins.
// Compatible with Yeoman ≥ 7 (which uses @inquirer/prompts under the hood).
// -----------------------------------------------------------------------------
// ⚠️  Copy & paste this file over the old generator. Remove any leftover
//     dependencies: `npm uninstall inquirer inquirer-checkbox-plus-prompt`.
//     Keep: chalk, uuid, lodash, path, yeoman-generator, fuzzy.
// -----------------------------------------------------------------------------

import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import path from 'path';
import Generator from 'yeoman-generator';
import fuzzy from 'fuzzy';

/* -------------------------------------------------------------------------- */
/*  CONSTANTS                                                                 */
/* -------------------------------------------------------------------------- */

// ✂️  Lista completa invariata; riordinata alfabeticamente.
const linkServices = [
  "IAdditionalFieldsManagementApi", "IAddressBookApi", "IAddressBookCategoryApi", "IAddressBookManagementApi", "IAddressBookNoteApi",
  "IAddressBookSearchApi", "IAddressBookSearchV3Api", "IAddressBookSearchV4Api", "IAddressBookV3Api", "IAddressBookV4Api",
  "IApiCallManagementApi", "IArxCeServicesManagementApi", "IArxESignApi", "IArxESignConfigurationManagementApi",
  "IAssistantApi", "IAssociationsApi", "IAssociationsV2Api", "IAttachmentsApi", "IAuthenticationApi", "IAuthProvider",
  "IBarcodeApi", "IBinderSearchApi", "IBinderSearchV3Api", "IBinderTypeSearchApi", "IBindersApi", "IBufferApi", "IBusinessUnitsApi",
  "IBusinessUnitsManagementApi", "ICacheApi", "ICalendarApi", "IChatApi", "ICheckInOutApi", "ICheckInOutV2Api", "IClassAdditionalFieldsApi",
  "IClassAdditionalFieldsV2Api", "IClientSettingsApi", "IContactCategoryApi", "ICustomLabelsApi", "IDatabaseManagenentApi",
  "IDelegationApi", "IDesktopApi", "IDesktopLayoutApi", "IDevicesApi", "IDiagramEventsApi", "IDiagramGroupsApi", "IDiagramObjectsApi",
  "IDiagramOperationsApi", "IDiagramVariablesApi", "IDiagramsApi", "IDocToOcrApi", "IDocumentTicketsApi", "IDocumentTypesApi",
  "IDocumentTypesManagementApi", "IDocumentsApi", "IElementApi", "IEncryptionApi", "IEncryptionManagementApi", "IExternalAppsApi",
  "IExternalAppsManagementApi", "IFieldsSelectorApi", "IFindApi", "IFoldersApi", "IFoldersManagementApi", "IFoldersV2Api", "IFullTextApi",
  "IGlobalSearchApi", "IGlobalSearchV3Api", "IGroupsManagementApi", "IGroupsModelsApi", "IIxCeServicesManagementApi",
  "IIxFeServicesManagementApi", "IIxServicesApi", "IIxServicesManagementApi", "ILanguagesApi", "ILayoutApi", "ILicenseApi",
  "ILicenseManagementApi", "ILogApi", "ILogJsApi", "ILogonProvidersManagementApi", "IMailApi", "IMailManagementApi", "IMailV2Api",
  "IMasksApi", "IMasksManagementApi", "IMassiveChangeApi", "IModelsApi", "IMongoDbProvider", "IMonitoredFoldersApi",
  "IMonitoredFoldersDetailsApi", "IMonitoredFoldersManagementApi", "INotesApi", "IOperationApi", "IOptionsApi", "IOptionsManagementApi",
  "IOriginsApi", "IOutcomeGroupsApi", "IOutcomesApi", "IPasswordManagerApi", "IPeriodsApi", "IPluginsApi", "IPredefinedProfilesApi",
  "IPredefinedProfilesManagementApi", "IPreviewsApi", "IProcessAttachmentsApi", "IProcessDocumentApi", "IProcessInfoApi",
  "IProcessNotesApi", "IProcessProfessionalRoleApi", "IProcessVariablesApi", "IProcessVariablesManagementApi", "IProcessesApi",
  "IProfilePermissionsApi", "IProfilesApi", "IPushNotificationsApi", "IQueueApi", "IQuickSearchesApi", "IQuickSearchesV2Api",
  "IRelationsApi", "IReportApi", "IRemoteSignConfigurationManagementApi", "IRevisionsApi", "IRestApisApi", "ISearchManagementApi",
  "ISearchesApi", "ISearchesV2Api", "ISearchesV3Api", "ISecretManagementApi", "ISecurityManagementApi", "ISharingApi",
  "ISharingDefinitionsApi", "IShippingApi", "ISignApi", "ISqlConditionsManagementApi", "ISqlConnectionsApi", "ISqlConnectionsManagementApi",
  "ISqlQueriesApi", "ISqlQueriesManagementApi", "IStampsApi", "IStatesApi", "IStatesManagementApi", "ITaskApi", "ITaskDocumentsApi",
  "ITaskLayoutApi", "ITaskLayoutBaseApi", "ITaskOperationsApi", "ITaskV2Api", "ITaskWorkApi", "ITaskWorkAttachmentsApi",
  "ITaskWorkAttachmentsV2Api", "ITaskWorkDocumentsApi", "ITaskWorkHistoryApi", "ITaskWorkHistoryV2Api", "ITaskWorkInstructionsApi",
  "ITaskWorkNotesApi", "ITaskWorkOperationsApi", "ITaskWorkV2Api", "ITicketDownloadsApi", "ITimeServerApi", "ITimestampApi", "IUserSearchApi",
  "IUserSearchV3Api", "IUserTagsApi", "IUsersApi", "IUsersLangApi", "IUsersManagementApi", "IUtilitiesManagementApi", "IViewsApi",
  "IViewsBuilderApi", "IViewsPermissionsApi", "IViewsV3Api", "IWorkflowApi", "IWorkflowEventsApi", "IWorkflowExtraGrantApi"
].sort();

const linkServicesFront = [
  'workflowResourceService', '_', 'arxivarResourceService', 'arxivarUserServiceCreator',
  'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'moment', '$timeout',
  '$document', '$window', '$rootScope', '$filter', '$q', '$uibModal'
];

/* -------------------------------------------------------------------------- */
/*  HELPERS                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Restituisce l'elenco filtrato fuzzy (case‑insensitive) in base all'input.
 * @param {string[]} list
 * @param {string} input
 */
function fuzzyFilter(list, input) {
  if (!input) return list;
  return fuzzy.filter(input, list).map((e) => e.original);
}

/* -------------------------------------------------------------------------- */
/*  GENERATOR CLASS                                                           */
/* -------------------------------------------------------------------------- */

export default class AppGenerator extends Generator {
  constructor(...args) {
    super(...args);
    if (this.options?.destinationRoot) {
      this.log('Set destinationRoot with: ' + this.options.destinationRoot);
      this.destinationRoot(this.options.destinationRoot);
    }
  }

  /* ---------------------------------- UTIL --------------------------------- */
  _shouldPrompt() {
    return !this._args || !this._args.includes('--auto');
  }

  /**
   * Wrapper per gestire --auto con valori pre‑iniettati via options.
   */
  _getResolvedValues(prompts) {
    if (this._shouldPrompt()) return this.prompt(prompts);

    // fallback to options.arxivarPluginSettings
    Object.keys(this.options.arxivarPluginSettings).forEach((key) => {
      const prompt = prompts?.find((p) => p.name === key);
      const value = this.options.arxivarPluginSettings[key];
      if (prompt && prompt.default && _.isNil(value)) {
        this.options.arxivarPluginSettings[key] = _.isFunction(prompt.default)
          ? prompt.default(this.options.arxivarPluginSettings)
          : prompt.default;
      }
    });
    return Promise.resolve(this.options.arxivarPluginSettings);
  }

  /* ----------------------------- WELCOME MSG ------------------------------- */
  showInfo() {
    this.log('Welcome to the pioneering ' + chalk.red('generator-arxivar-plugins') + ' generator!');
    this.log('Type yo --help to see available generators and subgenerators');
    this.log('Type ' + chalk.green('yo arxivar-plugins:command') + ' to create a ' + chalk.green('command plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:command-profilation') + ' to create a ' + chalk.green('command-profilation plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:command-task-v2') + ' to create a ' + chalk.green('command-task-v2 plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:route') + ' to create a ' + chalk.green('route plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:widget-desktop') + ' to create a ' + chalk.green('widget-desktop plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:widget-task') + ' to create a ' + chalk.green('widget-task plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:widget-task-v2') + ' to create a ' + chalk.green('widget-task V2 plugin'));
    this.log('Type ' + chalk.green('yo arxivar-plugins:link-workflow-v2') + ' to create a ' + chalk.green('link workflow V2 plugin'));
    const logo = [
      '           _____  __   ___             ',
      '     /\   |  __ \ \ \ / (_)            ',
      '    /  \  | |__) | \ V / ___   ____ _ ',
      '   / /\ \ |  _  /   > < | \ \ / / _` |',
      '  / ____ \| | \ \  / . \| |\ V / (_| |',
      ' /_/    \_\_|  \_\/_/ \_\_| \_/ \__,_|',
      '                                      '
    ].join('\n');
    this.log(logo);
  }


  _getPluginsExplanations() {
    return {
      requiredSettings: {
        MAIN: '// MANDATORY settings in order for the plugin to work.',
        id: '// Unique plugin identifier (type: string)',
        pluginname: '// Plugin name. Spaces special characters not allowed (type: string)',
        label: '// User Interface label (type: string)',
        description: '// Plugin description (type: string)',
        author: '// Plugin author (type: string)',
        minVersion: '// Minimun portal version this plugin supports. (type: string, format example: 0.0.1)',
        requireRefresh: '// If this plugin requires grid data refresh (type boolean. Default: false)',
        useTypescript: '// If this plugin use typescript compiler (type boolean. Default: false) '
      },
      customSettings: {
        MAIN: `// OPTIONAL settings. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format`
      },
      userSettings: {
        MAIN: `// OPTIONAL settings for specific users. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format`
      },
      widgetSettings: {
        MAIN: `// OPTIONAL settings for specific users. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format`
      },
      pluginCommandProfilation: {
        canRun: '// This function is a promise with asyncronous logic to determine if this plugin can run. \n\t// Input parameters: array of fields (params.fields), value of docnumber (params.docnumber only in edit profile) \n\t// Output parameter: Promise of bool',
        run: '// This function is a promise with asyncronous run logic. \n\t// Input parameters: array of fields (params.fields), value of docnumber (params.docnumber only in edit profile) \n\t// Output parameter: Promise of array of fileds (only the fields to change)'
      },
      pluginCommand: {
        canRun: '// This function is a promise with asyncronous logic to determine if this plugin can run. Input parameters: array of docnumbers (params.docnumbers), flag locked (params.locked only in F2) \n\t// Output parameter: Promise of bool',
        run: '// This function is a promise with asyncronous run logic. Input parameters: array of docnumbers (params.docnumbers), flag locked (params.locked only in F2) \n\t// Output parameter type expected: Promise of any'
      },
      pluginCommandTask: {
        canRun: '// This function is a promise with asyncronous logic to determine if this plugin can run. Input parameters: array of tasks (params.tasks) \n\t// Output parameter: Promise of bool',
        run: '// This function is a promise with asynchronous run logic. Input parameters: an array of tasks (params.tasks). Output parameter type expected: Promise of boolean (true to indicate the need for a grid refresh)'
      },
      pluginRoute: {
        inputdesc: '//To pass a parameter to the routePlugin add the queryParams parameter to the querystring',
        inputeg: '//E.g. {URL_PORTAL}/#!/pluginroutes/{PLUGIN_ID}?queryParams=valueToPass',
        outputdesc: '//The object params contain a property queryParams with the value passed',
        outputeg: '//E.g. console.log(params.queryParams) ->  valueToPass'
      }
    };
  }
  /* ------------------------ COMMON REQUIRED SETTINGS ----------------------- */
  _requiredSettings(options) {
    let prompts = [
      {
        type: 'input',
        name: 'pluginname',
        message: 'Your plugin name',
        validate: (pluginname) => {
          if (_.isEmpty(_.trim(pluginname))) return 'Empty plugin name';
          return /^[a-zA-Z0-9]*$/.test(pluginname) ? true : 'Use only [a‑zA‑Z0‑9]';
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your plugin description',
        default: (ans) => `${ans.pluginname} description`
      },
      {
        type: 'input',
        name: 'author',
        message: 'Plugin author name',
        default: (ans) => `${ans.pluginname} author`
      },
      {
        type: 'input',
        name: 'id',
        message: 'Your plugin unique identifier',
        default: uuidv4(),
        validate: (guid) => (_.isEmpty(_.trim(guid)) ? 'Invalid id' : true)
      },
      {
        type: 'input',
        name: 'label',
        message: 'Label for UI',
        default: (ans) => `${ans.pluginname} label`
      },
      {
        type: 'input',
        name: 'icon',
        message: 'FontAwesome icon (v6.5.1)',
        default: 'fas fa-puzzle-piece'
      },
      {
        type: 'input',
        name: 'minVersion',
        message: 'Minimum portal version supported?',
        default: '2.0.0'
      },
      {
        type: 'list',
        name: 'injectParams',
        message: 'Does your plugin need params from querystring (>=2.1)?',
        choices: ['no', 'yes'],
        default: 'no',
        filter: (v) => v === 'yes'
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Plugin dependencies (space separated)'
      },
      {
        type: 'list',
        name: 'typescript',
        message: 'Would you like to use TypeScript?',
        choices: ['no', 'yes'],
        default: 'no',
        filter: (v) => v === 'yes'
      },
      {
        type: 'input',
        name: 'arxPath',
        message: 'Path for the compiled plugin after webpack',
        when: (ans) => ans.typescript === true,
        default: (ans) => ans.pluginname,
        filter: (p) => p.split(path.sep).join(path.posix.sep)
      }
    ];

    if (options?.exclude) prompts = prompts.filter((p) => !options.exclude.includes(p.name));
    if (options?.minVersion) {
      const idx = prompts.findIndex((p) => p.name === 'minVersion');
      if (idx !== -1) prompts[idx].default = options.minVersion;
    }
    return prompts;
  }

  /* -------------------------- LINK PLUGIN SETTINGS ------------------------- */
  _linkSettings() {
    return [
      // — Metadata (riusa la validazione di _requiredSettings)
      {
        type: 'input',
        name: 'pluginname',
        message: 'Your plugin name',
        validate: (name) => (/^[a-zA-Z0-9]+$/.test(name) ? true : 'Use only [a‑zA‑Z0‑9]')
      },
      { type: 'input', name: 'description', message: 'Plugin description', default: (a) => `${a.pluginname} description` },
      { type: 'input', name: 'author', message: 'Author', default: (a) => `${a.pluginname} author` },
      { type: 'input', name: 'id', message: 'Unique id', default: uuidv4(), validate: (v) => (!!v ? true : 'Invalid id') },
      { type: 'input', name: 'label', message: 'Label', default: (a) => `${a.pluginname} label` },
      { type: 'input', name: 'icon', message: 'FontAwesome icon', default: 'far fa-puzzle-piece' },
      { type: 'input', name: 'version', message: 'Plugin version', default: '1.0.0' },

      // — Filtro + selezione multipla (input ➔ checkbox)
      {
        type: 'input',
        name: 'serviceSearch',
        message: 'Search keyword to filter services (empty = all):',
        default: ''
      },
      {
        type: 'checkbox',
        name: 'linkServices',
        message: 'Select services (use space to mark):',
        pageSize: 12,
        choices: (ans) => fuzzyFilter(linkServices, ans.serviceSearch),
        validate: (arr) => (arr.length === 0 ? 'Select at least one service' : true)
      }
    ];
  }

  /* --------------------- ADVANCED FRONT CONFIG SETTINGS -------------------- */
  _advancedConfigSettings() {
    return [
      {
        type: 'list',
        name: 'advConfig',
        message: 'Would you like advanced configuration?',
        choices: ['no', 'yes'],
        default: 'no',
        filter: (v) => v === 'yes'
      },
      {
        type: 'input',
        name: 'frontSearch',
        message: 'Filter front‑end services (empty = all):',
        when: (ans) => ans.advConfig === true,
        default: ''
      },
      {
        type: 'checkbox',
        name: 'linkServicesFront',
        message: 'Select front‑end services:',
        when: (ans) => ans.advConfig === true,
        pageSize: 12,
        choices: (ans) => fuzzyFilter(linkServicesFront, ans.frontSearch),
        default: ['workflowResourceService', '_']
      },
      {
        type: 'list',
        name: 'typescriptLink',
        message: 'Use TypeScript?',
        when: (ans) => ans.advConfig === true,
        choices: ['no', 'yes'],
        default: 'no',
        filter: (v) => v === 'yes'
      }
    ];
  }

  /* -------------------- INPUT / OUTPUT PARAMETER PROMPTS ------------------- */
  _inputQuestion() {
    return [{ type: 'list', name: 'inParams', message: 'Add INPUT parameters?', choices: ['no', 'yes'], default: 'no', filter: (v) => v === 'yes' }];
  }
  _outputQuestion() {
    return [{ type: 'list', name: 'outParams', message: 'Add OUTPUT parameters?', choices: ['no', 'yes'], default: 'no', filter: (v) => v === 'yes' }];
  }
  _inputParameter() {
    return [
      { type: 'input', name: 'propertyName', message: 'INPUT property name', validate: (n) => (!!n.trim() ? true : 'Cannot be empty') },
      { type: 'list', name: 'propertyType', message: 'INPUT property type', choices: ['string', 'int', 'bool', 'DateTime', 'object[]', 'object[,]'], default: 'string' },
      { type: 'list', name: 'repeat', message: 'Add more INPUT parameter?', choices: ['no', 'yes'], default: 'no', filter: (v) => v === 'yes' }
    ];
  }
  _outputParameter() {
    return [
      { type: 'input', name: 'propertyName', message: 'OUTPUT property name', validate: (n) => (!!n.trim() ? true : 'Cannot be empty') },
      { type: 'list', name: 'propertyType', message: 'OUTPUT property type', choices: ['string', 'int', 'bool', 'DateTime', 'object[]', 'object[,]'], default: 'string' },
      { type: 'list', name: 'repeat', message: 'Add more OUTPUT parameter?', choices: ['no', 'yes'], default: 'no', filter: (v) => v === 'yes' }
    ];
  }
}
