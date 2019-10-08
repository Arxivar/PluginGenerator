'use strict';
var chalk = require('chalk');
// var yosay = require('yosay');

var uuid = require('node-uuid');
var _ = require('lodash');
const Generator = require('yeoman-generator');

var AppGenerator = module.exports = class extends Generator {

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
        requireRefresh: '// If this plugin requires grid data refresh (type boolean. Default: false)'
      },
      customSettings: {
        MAIN: `// OPTIONAL settings. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format`
      },
      userSettings: {
        MAIN: `// OPTIONAL settings for specific users. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format`
      },
      pluginCommandProfilation: {
        canRun: '// This function is a promise with asyncronous logic to determine if this plugin can run. \n\t// Input parameters: array of fields (params.fields), docnumber (params.docnumber only in edit profile). \n\t// Output parameter: bool',
        run: '// This function is a promise with asyncronous run logic. \n\t// Input parameters: array of fields (params.fields), docnumber (params.docnumber only in edit profile). \n\t// Output parameter: array of fileds (only the fields to change)'
      },
      pluginCommand: {
        canRun: '// This function is a promise with asyncronous logic to determine if this plugin can run. Input parameters: array of docnumbers.',
        run: '// This function is a promise with asyncronous run logic. Input parameters: array of docnumbers.'
      },
      pluginRoute: {
        inputdesc: '//To pass a parameter to the routePlugin add the queryParams parameter to the querystring',
        inputeg: '//E.g. {URL_PORTAL}/#!/pluginroutes/{PLUGIN_ID}?queryParams=valueToPass',
        outputdesc: '//The object params contain a property queryParams with the value passed',
        outputeg: '//E.g. console.log(params.queryParams) ->  valueToPass',
      }
    };
  }
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
        default: '2.1.0'
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
      }
    ];

    if (options && options.exclude) {
      prompts = prompts.filter(function (obj) {
        return (options.exclude.indexOf(obj.name) === -1);
      });
    }
    if (options && options.minVersion) {
      var defaultMinVersion = _.find(prompts, {
        name: 'minVersion'
      })
      if (defaultMinVersion) {
        defaultMinVersion = options.minVersion
      }
    }
    return prompts;
  }

};
