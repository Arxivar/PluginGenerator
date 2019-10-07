'use strict';

// var yeoman = require('yeoman-generator');
var chalk = require('chalk');
// var yosay = require('yosay');
var path = require('path');

var AppGenerator = require('../app');

module.exports = class extends AppGenerator {
  initializing() {
    this.showInfo();
    this.log('Running ' + chalk.red('ROUTE') + ' generator!');
  }

  prompting() {
    var prompts = this.requiredSettings({
      exclude: ['requireRefresh'],
    });

    return this.prompt(prompts).then(
      function (props) {
        props.folderName = this.appname;
        props.plugincontroller = props.pluginname + 'Ctrl';

        props.dependencies = props.dependencies.toString().match(/[^ ]+/g) || [];
        props.dependencies.push('arxivarResourceService');
        props.dependencies.push('arxivarUserServiceCreator');
        props.dependencies.push('arxivarRouteService');
        props.dependencies.push('arxivarDocumentsService');
        props.dependencies.push('arxivarNotifierService');
        props.paramsCommentDesc = '';
        props.paramsCommentEx = '';
        props.paramsCommentParams = '';
        props.paramsCommentParamsEx = '';
        props.explanations = this.getPluginsExplanations();
        if (props.injectParams) {
          props.dependencies.push('params');
          props.paramsCommentDesc = props.explanations.pluginRoute.inputdesc;
          props.paramsCommentEx = props.explanations.pluginRoute.inputeg;
          props.paramsCommentParams = props.explanations.pluginRoute.outputdesc;
          props.paramsCommentParamsEx = props.explanations.pluginRoute.outputeg;
        }
        props.dependencies.unshift('');

        props.dependenciesString =
          props.dependencies.map(i => '\'' + i + '\'') || [];
        props.dependenciesString.shift();
        props.dependenciesString.push('');

        this.props = props;
      }.bind(this)
    );
  }
  writing() {
    this.destinationRoot(
      path.join('./plugins', this.props.pluginname)
    );
    // Copio la factory che conterra' i riferimenti agli asset statici del plugin rotta e che mi permette di recuperarli.
    var factoryRouteFilename = this.props.pluginname + '.js';
    var pageRouteFilename = this.props.pluginname + '.html';
    var controllerRouteFilename = this.props.plugincontroller + '.js';
    var styleRouteFilename = this.props.pluginname + '.css';

    this.fs.copyTpl(
      this.templatePath('PluginRouteTemplate.js'),
      this.destinationPath(factoryRouteFilename), {
        props: this.props
      }
    );
    this.log(chalk.green('Written file: ' + factoryRouteFilename));
    // Copio l'html
    this.fs.copyTpl(
      this.templatePath('PluginRouteTemplate.html'),
      this.destinationPath(pageRouteFilename), {
        props: this.props
      }
    );
    this.log(chalk.green('Written file: ' + pageRouteFilename));

    // Copio il controller
    this.fs.copyTpl(
      this.templatePath('PluginRouteTemplateCtrl.js'),
      this.destinationPath(controllerRouteFilename), {
        props: this.props
      }
    );
    this.log(chalk.green('Written file: ' + controllerRouteFilename));

    // Copio il css
    this.fs.copyTpl(
      this.templatePath('PluginRouteTemplate.css'),
      this.destinationPath(styleRouteFilename), {
        props: this.props
      }
    );
    this.log(chalk.green('Written file: ' + styleRouteFilename));
  }
};
