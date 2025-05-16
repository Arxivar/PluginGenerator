import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import path from 'path';
import Generator from 'yeoman-generator';
import {
  input as inputPrompt,
  select as selectPrompt,
  confirm as confirmPrompt
} from '@inquirer/prompts';

// disabilita warning "fs.Stats constructor is deprecated", da rimuovere quando yeoman verra patchato
process.removeAllListeners('warning');
process.on('warning', /** @type {(w: Error & { code?: string }) => void} */(w) => {
  if (w.code !== 'DEP0180') console.warn(w);
});


/* -------------------------------------------------------------------------- */
/*  CONSTANTS                                                                 */
/* -------------------------------------------------------------------------- */

export const linkServices = [
  "IAdditionalFieldsManagementApi", "IAddressBookApi", "IAddressBookCategoryApi", "IAddressBookManagementApi", "IAddressBookNoteApi",
  "IAddressBookSearchApi", "IAddressBookSearchV3Api", "IAddressBookSearchV4Api", "IAddressBookV3Api", "IAddressBookV4Api",
  "IApiCallManagementApi", "IArxCeServicesManagementApi", "IArxESignApi", "IArxESignConfigurationManagementApi",
  "IAssistantApi", "IAssociationsApi", "IAssociationsV2Api", "IAttachmentsApi", "IAuthenticationApi", "IAuthProvider",
  "IBarcodeApi", "IBinderSearchApi", "IBinderSearchV3Api", "IBinderTypeSearchApi", "IBindersApi", "IBufferApi", "IBusinessUnitsApi",
  "IBusinessUnitsManagementApi", "ICacheApi", "ICalendarApi", "IChatApi", "ICheckInOutApi", "ICheckInOutV2Api", "IClassAdditionalFieldsApi",
  "IClassAdditionalFieldsV2Api", "IClientSettingsApi", "IContactCategoryApi", "ICustomLabelsApi", "IDatabaseManagementApi",
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

export const linkServicesFront = [
  'workflowResourceService', '_', 'arxivarResourceService', 'arxivarUserServiceCreator',
  'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'moment', '$timeout',
  '$document', '$window', '$rootScope', '$filter', '$q', '$uibModal'
];

/* -------------------------------------------------------------------------- */
/*  GENERATOR CLASS                                                           */
/* -------------------------------------------------------------------------- */

export default class AppGenerator extends Generator {
  constructor(args, opts) {
    //customInstallTask nasconde il warning "No change to package.json was detected. No package manager install will be executed."
    super(args, opts, { customInstallTask: true });

    if (this.options?.destinationRoot) {
      this.log('Set destinationRoot with: ' + this.options.destinationRoot);
      this.destinationRoot(this.options.destinationRoot);
    }
  }

  /* ---------------------------------- UTIL --------------------------------- */
  _shouldPrompt() {
    return !this._args || !this._args.includes('--auto');
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
      '     /\\   |  __ \\ \\ \\ / (_)                ',
      '    /  \\  | |__) | \\ V / ___   ____ _ _ __ ',
      '   / /\\ \\ |  _  /   > < | \\ \\ / / _` |  __|',
      '  / ____ \\| | \\ \\  / . \\| |\\ V / (_| | |   ',
      ' /_/    \\_\\_|  \\_\\/_/ \\_\\_| \\_/ \\__,_|_|   ',
      '                                           '
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
  async _askRequiredSettings(options = {}) {

    // ------- Serve per l'autogenerazione dei plugin --------
    // @ts-ignore
    const settings = { ...(this.options.arxivarPluginSettings ?? {}) };
    const isExcluded = (key) => options.exclude?.includes(key);

    const needPrompt = (key) =>
      !isExcluded(key) && !Object.hasOwn(settings, key);


    // ------- Inserimento campi prompt --------
    if (needPrompt('pluginname')) {
      settings.pluginname = await inputPrompt({
        message: 'Your plugin name',
        required: true,
        validate: (val) => /^[a-zA-Z0-9]*$/.test(val.trim()) ? true : 'Use only [a-z A-Z 0-9]',
      });
    }

    if (needPrompt('description')) {
      settings.description = await inputPrompt({
        message: 'Your plugin description',
        required: true,
        default: `${settings.pluginname} description`,
      });
    }

    if (needPrompt('author')) {
      settings.author = await inputPrompt({
        message: 'Plugin author name',
        required: true,
        default: `${settings.pluginname} author`,
      });
    }

    if (needPrompt('id')) {
      settings.id = await inputPrompt({
        message: 'Your plugin unique identifier',
        default: uuidv4(),
        required: true,
        validate: (guid) => guid.trim() ? true : 'Invalid uuid v4',
      });
    }

    if (needPrompt('label')) {
      settings.label = await inputPrompt({
        message: 'Label for UI',
        required: true,
        default: `${settings.pluginname} label`,
      });
    }

    if (needPrompt('icon')) {
      settings.icon = await inputPrompt({
        message: 'FontAwesome icon (v6.5.1)',
        required: true,
        default: 'fas fa-puzzle-piece',
      });
    }

    if (needPrompt('version')) {
      settings.version = await inputPrompt({
        message: 'Plugin version',
        default: '1.0.0',
      });
    }

    if (needPrompt('minVersion')) {
      settings.minVersion = await inputPrompt({
        message: 'Minimum portal version supported?',
        required: true,
        default: options.minVersion || '2.0.0',
      });
    }

    if (needPrompt('requireRefresh')) {
      const requireRefresh = await confirmPrompt({
        message: 'Does your plugin require grid data refresh?',
        default: false,
      });
      settings.requireRefresh = requireRefresh;
    }

    if (needPrompt('injectParams')) {
      const injectParams = await confirmPrompt({
        message: 'Does your plugin need params from querystring (>=2.1 required)?',
        default: false,
      });
      settings.injectParams = injectParams;
    }

    if (needPrompt('dependencies')) {
      settings.dependencies = await inputPrompt({
        message: 'Plugin dependencies (space separated)',
      });
    }

    if (needPrompt('typescript')) {
      const typescript = await selectPrompt({
        message: 'Would you like to use TypeScript?',
        choices: [
          { name: 'No', value: false },
          { name: 'Yes', value: true },
        ],
        default: false,
      });
      settings.typescript = typescript;
    }

    if (needPrompt('arxPath') && settings.typescript) {
      let arxPath = await inputPrompt({
        message: 'Path for the compiled plugin after webpack',
        default: settings.pluginname,
      });

      settings.arxPath = arxPath.split(path.sep).join(path.posix.sep);
    }

    return settings;
  }
}
