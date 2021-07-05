'use strict';

// var yeoman = require('yeoman-generator');
var chalk = require('chalk');
// var yosay = require('yosay');
var path = require('path');
var uuid = require('node-uuid');
var _ = require('lodash');

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

var AppGenerator = require('../app');
const { toUpper, takeRight } = require('lodash');

module.exports = class extends AppGenerator {
	initializing() {
		this.showInfo();
		this.log('Running ' + chalk.red('LINK') + ' generator!');
	}

	prompting() {
		const promptsRequiredSettings = this.linkSettings({
			exclude: ['requireRefresh', 'injectParams', 'typescript'],
			minVersion: {
				type: 'input',
				name: 'minVersion',
				message: 'Minimum portal version supported?',
				default: '2.5.0'
			}
		});

		const promptsAdvancedSettings = this.advancedConfigSettings();
		const promptsInputParameter = this.inputParameter();
		const promptsOutputParameter = this.outputParameter();
		const that = this;

		const loopInputQuestion = () => {
			if (that.props.pluginname) {
				return that.prompt(promptsInputParameter)
					.then(props => {
						that.props.inputParameters.push({ propertyName: props.propertyName, propertyType: props.propertyType });
						return props.repeat ? loopInputQuestion() : that.prompt([]);
					});
			}
			return that.prompt([]);
		};
		const loopOutputQuestion = () => {
			if (that.props.pluginname) {
				return that.prompt(promptsOutputParameter)
					.then(props => {
						that.props.outputParameters.push({ propertyName: props.propertyName, propertyType: props.propertyType });
						return props.repeat ? loopOutputQuestion() : that.prompt([]);
					});
			}
			return that.prompt([]);
		};

		return that.prompt(promptsRequiredSettings)
			.then((_props) => {
				that.props = { ...that.props, ..._props };
				that.props.inputParameters = [];
				return loopInputQuestion();
			})
			.then((_props) => {
				that.props = { ...that.props, ..._props };
				that.props.outputParameters = [];
				return loopOutputQuestion();
			})
			.then((_props) => {
				that.props = { ...that.props, ..._props };
				return that.prompt(promptsAdvancedSettings);
			})
			.then((_props) => {
				that.props = { ...that.props, ..._props };
				that.props.folderName = that.appname;
				that.props.plugincontroller = that.props.pluginname + 'Ctrl';
				that.props.dependencies = that.props.dependencies ? that.props.dependencies.toString().match(/[^ ]+/g) || [] : [];
				that.props.dependenciesType = that.props.dependencies ? that.props.dependencies.toString().match(/[^ ]+/g) || [] : [];
				that.props.paramsCommentDesc = '';
				that.props.paramsCommentEx = '';
				that.props.paramsCommentParams = '';
				that.props.paramsCommentParamsEx = '';
				that.props.projectId = uuid.v4();
				that.props.guid = uuid.v4();
				that.props.explanations = that.getPluginsExplanations();
				//that.props.servicesString = that.props.linkServices ? that.props.linkServices.map(i => '\'' + i + '\'') || [] : [];

				if (that.props.typescriptLink) {
					that.props.linkServicesFrontType = that.props.linkServicesFront.map(matchType) || [];

					// eslint-disable-next-line no-inner-declarations
					function matchType(i) {
						switch (i) {
							case '$uibModal':
								return '$uibModal:angular.ui.bootstrap.IModalService';
							case 'moment':
								return 'moment: IMoment';
							case 'params':
								return 'params: IRouteParams';
							case '$document':
								return '$document: angular.IDocumentService';
							case '$window':
								return '$window: angular.IWindowService';
							case '$rootScope':
								return '$rootScope: angular.IRootScopeService';
							case '$http':
								return '$http: angular.IHttpService';
							case '$filter':
								return '$filter: angular.IFilterService';
							case '$timeout':
								return '$timeout: angular.ITimeoutService';
							case '_':
								return '_: LoDashStatic';
							case '$q':
								return '$q: angular.IQService';
							case 'arxivarResourceService':
								return 'arxivarResourceService: IArxivarResourceService';
							case 'arxivarUserServiceCreator':
								return 'arxivarUserServiceCreator: IArxivarUserServiceCreator';
							case 'arxivarRouteService':
								return 'arxivarRouteService: IArxivarRouteService';
							case 'arxivarDocumentsService':
								return 'arxivarDocumentsService: IArxivarDocumentsService';
							case 'arxivarNotifierService':
								return 'arxivarNotifierService: IArxivarNotifierService';
							default:
								return i;
						}
					}

				}
				that.props.dependenciesType.unshift('');
				that.props.dependencies.unshift('');
				that.props.dependenciesString = that.props.dependencies.map(i => '\'' + i + '\'') || [];
				that.props.linkServicesFront = that.props.linkServicesFront.map(i => '\'' + i + '\'') || [];
				that.props.dependenciesString.shift();
				that.props.dependenciesString.push('');
			});



	}


	writing() {


		if (!this.props.advConfig) {
			this.destinationRoot(
				path.join('./plugins-link', this.props.pluginname)
			);

			var classFilename = this.props.pluginname + '.cs';
			var classLibraryFilename = this.props.pluginname + '.csproj';
			var solution = this.props.pluginname + '.sln';
			var pluginName = this.props.pluginname;

			this.fs.copyTpl(
				this.templatePath('ClassTemplate.cs'),
				this.destinationPath(this.props.pluginname + '/' + classFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + classFilename));


			this.fs.copyTpl(
				this.templatePath('ClassLibraryTemplate.csproj'),
				this.destinationPath(this.props.pluginname + '/' + classLibraryFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + classLibraryFilename));


			this.fs.copyTpl(
				this.templatePath('solutionTemplate.sln'),
				this.destinationPath(solution), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + solution));
			this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-link **********'));


		}

		if (this.props.advConfig && this.props.typescriptLink) {
			this.destinationRoot(
				path.join('./plugins-link', this.props.pluginname)
			);
			//C#
			var classFilename = this.props.pluginname + '.cs';
			var classLibraryFilename = this.props.pluginname + '.csproj';
			var solution = this.props.pluginname + '.sln';
			var pluginName = this.props.pluginname;

			this.fs.copyTpl(
				this.templatePath('ClassTemplate.cs'),
				this.destinationPath(this.props.pluginname + '/' + classFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + classFilename));


			this.fs.copyTpl(
				this.templatePath('ClassLibraryTemplate.csproj'),
				this.destinationPath(this.props.pluginname + '/' + classLibraryFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + classLibraryFilename));


			this.fs.copyTpl(
				this.templatePath('solutionTemplate.sln'),
				this.destinationPath(solution), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + solution));

			//TS
			var controllerFilename = this.props.pluginname + '.ts';
			var pageLinkFilename = this.props.pluginname + '.html';
			var styleFilename = this.props.pluginname + '.css';
			var pluginName = this.props.pluginname;

			this.fs.copyTpl(
				this.templatePath('scripts/src/WfmDesignerOperationTemplate.ts'),
				this.destinationPath('scripts/src/' + controllerFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + controllerFilename));

			this.fs.copyTpl(
				this.templatePath('scripts/src/WfmDesignerOperationTemplateTs.html'),
				this.destinationPath('scripts/src/' + pageLinkFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + pageLinkFilename));

			this.fs.copyTpl(
				this.templatePath('scripts/src/WfmDesignerStyleTs.css'),
				this.destinationPath('scripts/src/' + styleFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + styleFilename));

			this.fs.copyTpl(
				this.templatePath('scripts/global.d.ts'),
				this.destinationPath('scripts/global.d.ts'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: global.d.ts'));

			//Copio Interfaces.ts
			this.fs.copyTpl(
				this.templatePath('scripts/Interfaces.ts'),
				this.destinationPath('scripts/Interfaces.ts'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: Interfaces.ts'));

			//Copio .babelrc
			this.fs.copyTpl(
				this.templatePath('.babelrc'),
				this.destinationPath('.babelrc'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: .babelrc'));

			//Copio .eslintrc
			this.fs.copyTpl(
				this.templatePath('.eslintrc'),
				this.destinationPath('.eslintrc'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: .eslintrc'));

			//Copio package.json
			this.fs.copyTpl(
				this.templatePath('package.json'),
				this.destinationPath('package.json'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: package.json'));

			//Copio postcss.config.js
			this.fs.copyTpl(
				this.templatePath('postcss.config.js'),
				this.destinationPath('postcss.config.js'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: postcss.config.js'));

			//Copio tsconfig.json
			this.fs.copyTpl(
				this.templatePath('tsconfig.json'),
				this.destinationPath('tsconfig.json'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: tsconfig.json'));

			//Copio webpack.config.js
			this.fs.copyTpl(
				this.templatePath('webpack.config.js'),
				this.destinationPath('webpack.config.js'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: webpack.config.js'));
			this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-link, run npm install there **********'));

		}


		if (this.props.advConfig && !this.props.typescriptLink) {

			this.destinationRoot(
				path.join('./plugins-link', this.props.pluginname)
			);

			//C#
			var classFilename = this.props.pluginname + '.cs';
			var classLibraryFilename = this.props.pluginname + '.csproj';
			var solution = this.props.pluginname + '.sln';
			var pluginName = this.props.pluginname;

			this.fs.copyTpl(
				this.templatePath('ClassTemplate.cs'),
				this.destinationPath(this.props.pluginname + '/' + classFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + classFilename));


			this.fs.copyTpl(
				this.templatePath('ClassLibraryTemplate.csproj'),
				this.destinationPath(this.props.pluginname + '/' + classLibraryFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + classLibraryFilename));


			this.fs.copyTpl(
				this.templatePath('solutionTemplate.sln'),
				this.destinationPath(solution), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + solution));

			//JS
			var controllerFilename = this.props.pluginname + '.js';
			var pageLinkFilename = this.props.pluginname + '.html';
			var styleFilename = this.props.pluginname + '.css';
			var pluginName = this.props.pluginname;

			this.fs.copyTpl(
				this.templatePath('scripts/src/WfmDesignerOperationTemplate.js'),
				this.destinationPath('scripts/src/' + controllerFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + controllerFilename));

			this.fs.copyTpl(
				this.templatePath('scripts/src/WfmDesignerOperationTemplateJs.html'),
				this.destinationPath('scripts/src/' + pageLinkFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + pageLinkFilename));


			this.fs.copyTpl(
				this.templatePath('scripts/src/wfmDesignerStyleJs.css'),
				this.destinationPath('scripts/src/' + styleFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + styleFilename));

			this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-link **********'));

		}
	}
};
