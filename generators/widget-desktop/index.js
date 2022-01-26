'use strict';

// var yeoman = require('yeoman-generator');
var chalk = require('chalk');
// var yosay = require('yosay');
var path = require('path');

var AppGenerator = require('../app');

module.exports = class extends AppGenerator {
	initializing() {
		this.showInfo();
		this.log('Running ' + chalk.red('WIDGET DESKTOP') + ' generator!');
	}

	prompting() {
		var prompts = this.requiredSettings({
			exclude: ['requireRefresh', 'injectParams', 'advConfig']
		});
		return this.prompt(prompts).then(
			function(props) {
				props.folderName = this.appname;
				props.plugindirective = props.pluginname + 'Directive';
				props.dependencies = props.dependencies.toString().match(/[^ ]+/g) || [];
				props.dependenciesType = props.dependencies.toString().match(/[^ ]+/g) || [];

				if (props.typescript) {
					props.dependenciesType = props.dependencies.map(matchType) || [];

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
							default:
								return i;
						}
					}

					//props.dependenciesType = props.dependencies.map(matchType) || [];

				}
				props.dependenciesType.unshift('');
				props.dependencies.unshift('');
				props.dependenciesString = props.dependencies.map(i => '\'' + i + '\'') || [];
				props.dependenciesString.shift();
				props.dependenciesString.push('');

				props.explanations = this.getPluginsExplanations();
				this.props = props;
			}.bind(this)
		);
	}


	writing() {

		var interfacePath = '../../../docs/frontend/';
		var basePath = '../../../';

		if (this.props.typescript) {
			this.destinationRoot(
				path.join('./plugins-ts', this.props.pluginname)
			);
			// Copio la factory che conterra' i riferimenti agli asset statici del plugin rotta e che mi permette di recuperarli.
			var factoryRouteFilename = this.props.pluginname + '.ts';
			var pageRouteFilename = this.props.pluginname + '.html';
			var controllerRouteFilename = this.props.plugindirective + '.ts';
			var styleRouteFilename = this.props.pluginname + '.css';

			this.fs.copyTpl(
				this.templatePath('src/PluginWidgetTemplate.ts'),
				this.destinationPath('src/' + factoryRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + factoryRouteFilename));
			// Copio l'html
			this.fs.copyTpl(
				this.templatePath('src/PluginWidgetTemplate.html'),
				this.destinationPath('src/' + pageRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + pageRouteFilename));

			// Copio il controller
			this.fs.copyTpl(
				this.templatePath('src/PluginWidgetTemplateDirective.ts'),
				this.destinationPath('src/' + controllerRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + controllerRouteFilename));

			// Copio il css
			this.fs.copyTpl(
				this.templatePath('src/PluginWidgetTemplate.css'),
				this.destinationPath('src/' + styleRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + styleRouteFilename));

			//Copio il file dummy per creare la folder libs
			this.fs.copyTpl(
				this.templatePath('READMELIBS.txt'),
				this.destinationPath('libs/README.txt'), {
				props: this.props
			}
			);
			this.log(chalk.green('Create folder libs'));

			//Copio .babelrc
			this.fs.copyTpl(
				this.templatePath(basePath+'.babelrc'),
				this.destinationPath('.babelrc'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: .babelrc'));

			//Copio .eslintrc
			this.fs.copyTpl(
				this.templatePath(basePath+'.eslintrc'),
				this.destinationPath('.eslintrc'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: .eslintrc'));

			//Copio global.d.ts
			this.fs.copyTpl(
				this.templatePath(basePath+'global.d.ts'),
				this.destinationPath('global.d.ts'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: global.d.ts'));

			//Copio Interfaces.ts
			this.fs.copyTpl(
				this.templatePath(interfacePath + 'Interfaces.ts'),
				this.destinationPath('Interfaces.ts'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: Interfaces.ts'));

			//Copio package.json
			this.fs.copyTpl(
				this.templatePath(basePath+'templatepackage.json'),
				this.destinationPath('package.json'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: package.json'));

			//Copio package-lock.json
			this.fs.copyTpl(
				this.templatePath(basePath+'package-lock.json'),
				this.destinationPath('package-lock.json'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: package-lock.json'));

			//Copio postcss.config.js
			this.fs.copyTpl(
				this.templatePath(basePath+'postcss.config.js'),
				this.destinationPath('postcss.config.js'), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: postcss.config.js'));

			//Copio tsconfig.json
			this.fs.copyTpl(
				this.templatePath(basePath+'tsconfig.json'),
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
		}

		if (!this.props.typescript) {
			this.destinationRoot(
				path.join('./plugins', this.props.pluginname)
			);
			// Copio la factory che conterra' i riferimenti agli asset statici del plugin rotta e che mi permette di recuperarli.
			var factoryRouteFilename = this.props.pluginname + '.js';
			var pageRouteFilename = this.props.pluginname + '.html';
			var directiveFilename = this.props.plugindirective + '.js';
			var styleRouteFilename = this.props.pluginname + '.css';

			this.fs.copyTpl(
				this.templatePath('PluginWidgetTemplate.js'),
				this.destinationPath(factoryRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + factoryRouteFilename));
			// Copio l'html
			this.fs.copyTpl(
				this.templatePath('PluginWidgetTemplate.html'),
				this.destinationPath(pageRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + pageRouteFilename));

			// Copio il controller
			this.fs.copyTpl(
				this.templatePath('PluginWidgetTemplateDirective.js'),
				this.destinationPath(directiveFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + directiveFilename));

			// Copio il css
			this.fs.copyTpl(
				this.templatePath('PluginWidgetTemplate.css'),
				this.destinationPath(styleRouteFilename), {
				props: this.props
			}
			);
			this.log(chalk.green('Written file: ' + styleRouteFilename));

			//Copio il file dummy per creare la folder libs
			this.fs.copyTpl(
				this.templatePath('READMELIBS.txt'),
				this.destinationPath('libs/README.txt'), {
				props: this.props
			}
			);
			this.log(chalk.green('Create folder libs'));
		}

	}
};
