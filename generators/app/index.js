'use strict';
var chalk = require('chalk');
// var yosay = require('yosay');

var uuid = require('node-uuid');
var _ = require('lodash');
var path = require('path');
const Generator = require('yeoman-generator');
var fuzzy = require('fuzzy');



const linkServices = [
  "IMongoDbProvider",
  "IAuthProvider",
  "IAddressBookApi",
  "IAddressBookCategoryApi",
  "IAddressBookNoteApi",
  "IAddressBookSearchApi",
  "IAddressBookSearchV3Api",
  "IAddressBookSearchV4Api",
  "IAddressBookV3Api",
  "IAddressBookV4Api",
  "IArxESignApi",
  "IAssistantApi",
  "IAssociationsApi",
  "IAssociationsV2Api",
  "IAttachmentsApi",
  "IAuthenticationApi",
  "IBarcodeApi",
  "IBindersApi",
  "IBinderSearchApi",
  "IBinderSearchV3Api",
  "IBinderTypeSearchApi",
  "IBufferApi",
  "IBusinessUnitsApi",
  "ICacheApi",
  "IChatApi",
  "ICheckInOutApi",
  "ICheckInOutV2Api",
  "IClassAdditionalFieldsApi",
  "IClassAdditionalFieldsV2Api",
  "IClientSettingsApi",
  "IContactCategoryApi",
  "ICustomLabelsApi",
  "IDelegationApi",
  "IDesktopApi",
  "IDesktopLayoutApi",
  "IDevicesApi",
  "IDocToOcrApi",
  "IDocumentsApi",
  "IDocumentTicketsApi",
  "IDocumentTypesApi",
  "IElementApi",
  "IEncryptionApi",
  "IExternalAppsApi",
  "IFieldsSelectorApi",
  "IFindApi",
  "IFoldersApi",
  "IFoldersV2Api",
  "IFullTextApi",
  "IGlobalSearchApi",
  "IGlobalSearchV3Api",
  "IGroupsModelsApi",
  "IIxServicesApi",
  "ILanguagesApi",
  "ILayoutApi",
  "ILicenseApi",
  "ILogApi",
  "ILogJsApi",
  "IMailApi",
  "IMailV2Api",
  "IMasksApi",
  "IMassiveChangeApi",
  "IModelsApi",
  "IMonitoredFoldersApi",
  "IMonitoredFoldersDetailsApi",
  "INotesApi",
  "IOperationApi",
  "IOptionsApi",
  "IOriginsApi",
  "IPasswordManagerApi",
  "IPeriodsApi",
  "IPluginsApi",
  "IPredefinedProfilesApi",
  "IPreviewsApi",
  "IProcessAttachmentsApi",
  "IProcessDocumentApi",
  "IProcessInfoApi",
  "IProcessNotesApi",
  "IProcessProfessionalRoleApi",
  "IProcessVariablesApi",
  "IProfilePermissionsApi",
  "IProfilesApi",
  "IPushNotificationsApi",
  "IQueueApi",
  "IQuickSearchesApi",
  "IQuickSearchesV2Api",
  "IRelationsApi",
  "IReportApi",
  "IRevisionsApi",
  "ISearchesApi",
  "ISearchesV2Api",
  "ISearchesV3Api",
  "ISharingApi",
  "ISharingDefinitionsApi",
  "IShippingApi",
  "ISignApi",
  "IStampsApi",
  "IStatesApi",
  "ITaskLayoutApi",
  "ITaskV2Api",
  "ITaskWorkApi",
  "ITaskWorkAttachmentsApi",
  "ITaskWorkAttachmentsV2Api",
  "ITaskWorkDocumentsApi",
  "ITaskWorkHistoryApi",
  "ITaskWorkHistoryV2Api",
  "ITaskWorkInstructionsApi",
  "ITaskWorkNotesApi",
  "ITaskWorkOperationsApi",
  "ITaskWorkV2Api",
  "ITicketDownloadsApi",
  "ITimeServerApi",
  "ITimestampApi",
  "IUsersApi",
  "IUserSearchApi",
  "IUserSearchV3Api",
  "IUsersLangApi",
  "IViewsApi",
  "IViewsBuilderApi",
  "IViewsPermissionsApi",
  "IViewsV3Api",
  "IWorkflowApi",
  "IWorkflowEventsApi",
  "IWorkflowExtraGrantApi",
  "IAdditionalFieldsManagementApi",
  "IAddressBookManagementApi",
  "IApiCallManagementApi",
  "IArxCeServicesManagementApi",
  "IArxESignConfigurationManagementApi",
  "IBusinessUnitsManagementApi",
  "IDatabaseManagenentApi",
  "IDataGroupsManagementApi",
  "IDocumentTypesManagementApi",
  "IEncryptionManagementApi",
  "IExternalAppsManagementApi",
  "IFoldersManagementApi",
  "IFormulaManagementApi",
  "IGroupsManagementApi",
  "IIxCeServicesManagementApi",
  "IIxFeServicesManagementApi",
  "IIxServicesManagementApi",
  "ILicenseManagementApi",
  "ILogonProvidersManagementApi",
  "IMailManagementApi",
  "IMasksManagementApi",
  "IMonitoredFoldersManagementApi",
  "IOptionsManagementApi",
  "IPredefinedProfilesManagementApi",
  "IRemoteSignConfigurationManagementApi",
  "ISearchManagementApi",
  "ISecurityManagementApi",
  "ISqlConditionsManagementApi",
  "ISqlConnectionsManagementApi",
  "ISqlQueriesManagementApi",
  "IStatesManagementApi",
  "IUsersManagementApi",
  "IUtilitiesManagementApi",
  "ICalendarApi",
  "IDiagramEventsApi",
  "IDiagramGroupsApi",
  "IDiagramObjectsApi",
  "IDiagramOperationsApi",
  "IDiagramsApi",
  "IDiagramVariablesApi",
  "IFormulesApi",
  "IOutcomeGroupsApi",
  "IOutcomesApi",
  "IProcessesApi",
  "IProcessVariablesApi",
  "IRestApisApi",
  "ISqlConnectionsApi",
  "ISqlQueriesApi",
  "ITaskApi",
  "ITaskDocumentsApi",
  "ITaskLayoutApi",
  "ITaskLayoutBaseApi",
  "ITaskOperationsApi",
  "IUserTagsApi"
].sort();

const linkServicesFront = ['workflowResourceService', '_', 'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'moment', '$timeout', '$document', '$window', '$rootScope', '$filter', '$q', '$uibModal'];

function searchService(answers, input) {
  input = input || '';
  return new Promise(function (resolve) {
    var fuzzyResult = fuzzy.filter(input, linkServices);
    var data = fuzzyResult.map(function (element) {
      return element.original;
    });
    resolve(data);
  });
}

function searchServiceFront(answers, input) {
  input = input || '';
  return new Promise(function (resolve) {
    var fuzzyResult = fuzzy.filter(input, linkServicesFront);
    var data = fuzzyResult.map(function (element) {
      return element.original;
    });
    resolve(data);
  });
}

var AppGenerator = module.exports = class extends Generator {

  constructor(...args) {
    super(...args);

    if(this.options && this.options.destinationRoot) {
      this.log('Set destinationRoot with: ' + this.options.destinationRoot);
      this.destinationRoot(this.options.destinationRoot);
    }
  }

  shouldPrompt() {
    return this._args === undefined || this._args === null || !this._args.includes('--auto');
  }

  getResolvedValues(prompts) {
    const shouldPrompt = this.shouldPrompt();
    if (shouldPrompt) {
      return this.prompt(prompts);
    }
    Object.keys(this.options.arxivarPluginSettings).forEach(key => {
      const prompt = _.isNil(prompts) ? undefined : prompts.find(p => p.name === key);
      const value = this.options.arxivarPluginSettings[key]
      if (!_.isNil(prompt) && !_.isNil(prompt.default) && _.isNil(value)) {
        this.options.arxivarPluginSettings[key] = _.isFunction(prompt.default) ? prompt.default(this.options.arxivarPluginSettings) : prompt.default
      }
    });
    return Promise.resolve(this.options.arxivarPluginSettings)
  }

  showInfo() {
    // Have Yeoman greet the user.
    this.log(
      'Welcome to the pioneering ' + chalk.red('generator-arxivar-plugins') + ' generator!'
    );
    this.log(
      'Type yo --help to see available generators and subgenerators'
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:command') + ' in order to create ' + chalk.green('command plugin')
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:command-profilation') + ' in order to create ' + chalk.green('command-profilation plugin')
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:route') + ' in order to create ' + chalk.green('route plugin')
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:widget-desktop') + ' in order to create ' + chalk.green('widget-desktop plugin')
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:widget-task') + ' in order to create ' + chalk.green('widget-task plugin')
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:widget-task-v2') + ' in order to create ' + chalk.green('widget-task V2 plugin')
    );
    this.log(
      'Type ' + chalk.green('yo arxivar-plugins:link-workflow-v2') + ' in order to create ' + chalk.green('link workflow V2 plugin')
    );
    var logo = [
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
  getPluginsExplanations() {
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
      pluginRoute: {
        inputdesc: '//To pass a parameter to the routePlugin add the queryParams parameter to the querystring',
        inputeg: '//E.g. {URL_PORTAL}/#!/pluginroutes/{PLUGIN_ID}?queryParams=valueToPass',
        outputdesc: '//The object params contain a property queryParams with the value passed',
        outputeg: '//E.g. console.log(params.queryParams) ->  valueToPass'
      }
    };
  }
  //settings di tutti i plugins escluso il plugin link
  requiredSettings(options) {

    var prompts = [{
        type: 'input',
        name: 'pluginname',
        message: 'Your plugin name',
        // default: _.upperFirst(_.replace(_(this.appname).toString().trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, ''), '.', '')), // Default to current folder name
        validate: function (pluginname) {
          if (_.isEmpty(_.trim(pluginname)) === true) {
            return 'Empty plugin name. Type a plugin name';
          }
          const validPlugiNnamePattern = /^[a-zA-Z0-9]*$/g;
          if (!validPlugiNnamePattern.test(pluginname)) {
            return 'Invalid plugin name. Try removing spaces and special characters ([a-zA-Z0-9] allowed only)';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your plugin description',
        default: function (answers) {
          return answers.pluginname + ' description';
        }
      },
      {
        type: 'input',
        name: 'author',
        message: 'Plugin author name',
        default: function (answers) {
          return answers.pluginname + ' author';
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Your plugin unique identifier',
        default: uuid.v4(),
        validate: function (guid) {
          if (_.isEmpty(_.trim(guid)) === false) {
            return true;
          }
          return 'Invalid plugin identifier. Try something like: ' + uuid.v4();
        }
      },
      {
        type: 'input',
        name: 'label',
        message: 'Label for UI',
        default: function (answers) {
          return answers.pluginname + ' label';
        }
      },
      {
        type: 'input',
        name: 'icon',
        message: 'FontAwesome icon for command (https://fontawesome.com/icons up to version 5.10.0)',
        default: function (answers) {
          return 'fas fa-puzzle-piece';
        }
      },
      {
        type: 'input',
        name: 'minVersion',
        message: 'Minimum portal version supported?',
        default: '2.0.0'
      },
      {
        type: 'list',
        name: 'requireRefresh',
        message: 'Does your plugin require grid data refresh?',
        default: 'no',
        choices: ['no', 'yes'],
        validate: function (requireRefreshString) {
          return requireRefreshString === 'yes' || requireRefreshString === 'no';
        },
        filter: function (requireRefreshString) {
          return requireRefreshString === 'yes';
        }
      },
      {
        type: 'list',
        name: 'injectParams',
        message: 'Does your plugin need params from querystring (Ver. >=2.1 required)?',
        default: 'no',
        choices: ['no', 'yes'],
        validate: function (injectParams) {
          return injectParams === 'yes' || injectParams === 'no';
        },
        filter: function (injectParams) {
          return injectParams === 'yes';
        }
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Plugin dependencies (space-separated values)'
      },
      {
        type: 'list',
        name: 'typescript',
        message: 'Would you like to use typescript?',
        default: 'no',
        choices: ['no', 'yes'],
        validate: function (useTypescript) {
          return useTypescript === 'yes' || useTypescript === 'no';
        },
        filter: function (useTypescript) {
          return useTypescript === 'yes';
        }
      },
      {
        type: 'input',
        name: 'arxPath',
        message: 'Path for the compiled plugin after run webpack command',
        default: function (answers) {
          return answers.pluginname;
        },
        when: function (answers) {
          return answers.typescript === true;
        },
        filter: function (arxPath) {
          return arxPath.split(path.sep).join(path.posix.sep);
        }

      }
    ];

    if (options && options.exclude) {
      prompts = prompts.filter(function (obj) {
        return (options.exclude.indexOf(obj.name) === -1);
      });
    }
    if (options && options.minVersion) {
      var defaultMinVersion = _.findIndex(prompts, {
        name: 'minVersion'
      });
      if (defaultMinVersion) {
        prompts[defaultMinVersion] = options.minVersion;
      }
    }
    return prompts;
  }
  //settings principali del - plugin Link	
  linkSettings(options) {

    var prompts = [{
        type: 'input',
        name: 'pluginname',
        message: 'Your plugin name',
        // default: _.upperFirst(_.replace(_(this.appname).toString().trim().toLowerCase().replace(/ /g, '-').replace(/([^a-zA-Z0-9\._-]+)/, ''), '.', '')), // Default to current folder name
        validate: function (pluginname) {
          if (_.isEmpty(_.trim(pluginname)) === true) {
            return 'Empty plugin name. Type a plugin name';
          }
          const validPlugiNnamePattern = /^[a-zA-Z0-9]*$/g;
          if (!validPlugiNnamePattern.test(pluginname)) {
            return 'Invalid plugin name. Try removing spaces and special characters ([a-zA-Z0-9] allowed only)';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your plugin description',
        default: function (answers) {
          return answers.pluginname + ' description';
        }
      },
      {
        type: 'input',
        name: 'author',
        message: 'Plugin author name',
        default: function (answers) {
          return answers.pluginname + ' author';
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Your plugin unique identifier',
        default: uuid.v4(),
        validate: function (guid) {
          if (_.isEmpty(_.trim(guid)) === false) {
            return true;
          }
          return 'Invalid plugin identifier. Try something like: ' + uuid.v4();
        }
      },
      {
        type: 'input',
        name: 'label',
        message: 'Label for UI',
        default: function (answers) {
          return answers.pluginname + ' label';
        }
      },
      {
        type: 'input',
        name: 'icon',
        message: 'FontAwesome icon for command (https://fontawesome.com/icons up to version 5.10.0)',
        default: function (answers) {
          return 'far fa-puzzle-piece';
        }
      },
      {
        type: 'input',
        name: 'version',
        message: 'Insert plugin version: ',
        default: '1.0.0'
      },
      {
        type: 'checkbox-plus',
        name: 'linkServices',
        message: 'Insert Services (search by typing, select with spacebar): ',
        pageSize: 10,
        highlight: true,
        searchable: true,
        source: searchService,
      }
    ];
    return prompts;
  }

  inputQuestion() {
    const prompts = [{
      type: 'list',
      name: 'inParams',
      message: 'Would you like to insert INPUT parameters?',
      default: 'no',
      choices: ['no', 'yes'],
      validate: function (inParams) {
        return inParams === 'yes' || inParams === 'no';
      },
      filter: function (inParams) {
        return inParams === 'yes';
      }
    }];
    return prompts;
  }

  outputQuestion() {
    const prompts = [{
      type: 'list',
      name: 'outParams',
      message: 'Would you like to insert OUTPUT parameters?',
      default: 'no',
      choices: ['no', 'yes'],
      validate: function (outParams) {
        return outParams === 'yes' || outParams === 'no';
      },
      filter: function (outParams) {
        return outParams === 'yes';
      }
    }];
    return prompts;
  }

  inputParameter() {
    const prompts = [{
        type: 'input',
        name: 'propertyName',
        message: 'Insert INPUT property name: ',
        validate: function (propertyName) {
          if (_.isEmpty(_.trim(propertyName)) === true) {
            return 'Empty input property name. Type a name';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'propertyType',
        choices: ['string', 'int', 'bool', 'DateTime', 'object[]', 'object[,]'],
        default: 'string',
        message: 'Insert INPUT property type: ',
      },
      {
        type: 'list',
        name: 'repeat',
        message: 'Do you want to add more INPUT parameter? ',
        default: 'no',
        choices: ['no', 'yes'],
        validate: function (addInput) {
          return addInput === 'yes' || addInput === 'no';
        },
        filter: function (addInput) {
          return addInput === 'yes';
        }
      }
    ]
    return prompts;
  }

  outputParameter() {
    const prompts = [{
        type: 'input',
        name: 'propertyName',
        message: 'Insert OUTPUT property name: ',
        validate: function (propertyName) {
          if (_.isEmpty(_.trim(propertyName)) === true) {
            return 'Empty output property name. Type a name';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'propertyType',
        choices: ['string', 'int', 'bool', 'DateTime', 'object[]', 'object[,]'],
        default: 'string',
        message: 'Insert OUTPUT property type: ',
      },
      {
        type: 'list',
        name: 'repeat',
        message: 'Do you want to add more OUTPUT parameter? ',
        default: 'no',
        choices: ['no', 'yes'],
        validate: function (addInput) {
          return addInput === 'yes' || addInput === 'no';
        },
        filter: function (addInput) {
          return addInput === 'yes';
        }
      }
    ]
    return prompts;
  }
  //settings delle configurazioni avanzate - plugin Link
  advancedConfigSettings() {
    this.env.adapter.promptModule.registerPrompt("checkbox-plus", require("inquirer-checkbox-plus-prompt"));
    const prompts = [{
        type: 'list',
        name: 'advConfig',
        message: 'Would you like to use advanced configuration?',
        default: 'no',
        choices: ['no', 'yes'],
        validate: function (useAdvConfig) {
          return useAdvConfig === 'yes' || useAdvConfig === 'no';
        },
        filter: function (useAdvConfig) {
          return useAdvConfig === 'yes';
        }
      },
      {
        type: 'checkbox-plus',
        name: 'linkServicesFront',
        message: 'Insert Services or Dependecies (search by typing, select with spacebar): ',
        default: ['workflowResourceService', '_'],
        pageSize: 10,
        highlight: true,
        searchable: true,
        when: function (answers) {
          return answers.advConfig === true;
        },
        source: searchServiceFront,
      },
      {
        type: 'list',
        name: 'typescriptLink',
        message: 'Would you like to use typescript?',
        default: 'no',
        choices: ['no', 'yes'],
        when: function (answers) {
          return answers.advConfig === true;
        },
        validate: function (useTypescript) {
          return useTypescript === 'yes' || useTypescript === 'no';
        },
        filter: function (useTypescript) {
          return useTypescript === 'yes';
        }
      },
    ]
    return prompts;
  }
};
