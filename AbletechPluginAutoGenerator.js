var yeoman = require('yeoman-environment');
const { exec } = require('child_process');
const abletechPlugins = require('./AbletechPluginAutoGenerator.json');
var env = yeoman.createEnv();

//const grunt = require.resolve('grunt',{paths: ['C:\\Users\\l.nodari\\AppData\\Roaming\\nvm\\v16.13.2\\node_modules']});

//env.register(require.resolve('generator-arxivar-plugins'));
//env.register(require.resolve('generator-arxivar-plugins:command'));

env.lookup();

// var generatorNames = env.getGeneratorNames()
// var generatorsMeta = env.getGeneratorsMeta()

// console.log('generatorNames: ' + JSON.stringify(generatorNames))
// console.log('generatorsMeta: ' + JSON.stringify(generatorsMeta))

const runNpmInstall = (pluginDirectory) => {
	console.log('Sto eseguendo l\'npm install del plugin nella cartella ' + pluginDirectory + ' ...');
	return new Promise((resolve, reject) => {
		exec('npm i', (error, stdout, stderr) => {
			if (error) {
				console.log('Npm install è terminato con gli errori', error, stderr);
				reject();
			} else {
				console.log('Npm install è andato a buon fine!', stdout);
				resolve();
			}
		});
	});
};

const runNpmRunWebpack = (pluginDirectory) => {
	console.log('Sto eseguendo l\'npm run webpack del plugin nella cartella ' + pluginDirectory + ' ...');
	exec('npm run webpack', (error, stdout, stderr) => {
		if (error) {
			console.log('Npm run webpack è terminato con gli errori', error, stderr);
		} else {
			console.log('Npm run webpack è andato a buon fine!', stdout);
		}
	});
};

let promiseChain = Promise.resolve();
for (let index = 0; index < abletechPlugins.length; index++) {
	promiseChain = promiseChain.then(() => {
		return new Promise((resolve, reject) => {
			const plugin = abletechPlugins[index];
			const pluginGenerator = plugin.pluginType.replace(/'/g, '"');

			const baseGitPath = 'C:/git';
			const portalPluginRelativePath = 'ArxivarNext/Web/ARXivarSuite/Abletech.Arxivar.Client.Web.Portal/Scripts/plugins';
			const fullPathPortalPlugins = `${baseGitPath}/${portalPluginRelativePath}/${plugin.pluginname}`;

			let arxPath = undefined;
			if (plugin.typescript) {
				arxPath = plugin.arxPath || fullPathPortalPlugins;
				console.log('Set arxPath only for typescript plugin: ', arxPath);
			}

			env.run(pluginGenerator, {
				destinationRoot: __dirname,
				arxivarPluginSettings: {
					pluginname: plugin.pluginname,
					description: plugin.description,
					author: plugin.author,
					id: plugin.id,
					label: plugin.label,
					icon: plugin.icon,
					minVersion: plugin.minVersion,
					requireRefresh: plugin.requireRefresh,
					injectParams: plugin.injectParams,
					dependencies: plugin.dependencies,
					typescript: plugin.typescript,
					arxPath: arxPath
				}
			}).then(() => {
				if (!plugin.typescript) {
					resolve();
					return;
				}

				const pluginDirectory = `${__dirname}\\plugins-ts\\${plugin.pluginname}`;
				return runNpmInstall(pluginDirectory)
					.then(() => {
						runNpmRunWebpack(pluginDirectory);
						resolve();
					});
			}).catch((reason) => {
				reject(reason);
			});
		});
	});
}
