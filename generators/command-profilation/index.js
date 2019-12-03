'use strict';
// var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');

var AppGenerator = require('../app');

module.exports = class extends AppGenerator {
  initializing() {
    this.showInfo();
    this.log('Running ' + chalk.red('COMMAND PROFILATION') + ' generator!');
  }
  prompting() {
    var prompts = this.requiredSettings({
      exclude: ['injectParams', 'requireRefresh'],
      minVersion: {
        type: 'input',
        name: 'minVersion',
        message: 'Minimum portal version supported?',
        default: '2.2.0'
      }
    });

    return this.prompt(prompts).then(
      function (props) {
        props.dependencies =
          props.dependencies.toString().match(/[^ ]+/g) || [];
        props.dependencies.push('arxivarResourceService');
        props.dependencies.push('arxivarUserServiceCreator');
        props.dependencies.push('arxivarRouteService');
        props.dependencies.push('arxivarDocumentsService');
        props.dependencies.unshift('');

        props.dependenciesString =
          props.dependencies.map(i => "'" + i + "'") || [];
        props.dependenciesString.shift();
        props.dependenciesString.push('');
        props.explanations = this.getPluginsExplanations();
        this.props = props;
      }.bind(this)
    );
  }

  writing() {
    this.destinationRoot(
      path.join('./plugins', this.props.pluginname)
    );
    var pluginCommandFilename = this.props.pluginname + 'PluginCommandProfilation.js';
    this.fs.copyTpl(
      this.templatePath('PluginCommandProfilationTemplate.js'),
      this.destinationPath(pluginCommandFilename), {
        props: this.props
      }
    );
    this.log(chalk.green('Written file: ' + pluginCommandFilename));
  }

  // install: function () {
  //   this.log(
  //       'Install in command generator'
  //   );
  //   this.installDependencies();
  // }
};
