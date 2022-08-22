var yeoman = require('yeoman-environment');
const {
  exec
} = require('child_process');
const {
  reject
} = require('lodash');
const abletechPlugins = require("./AbletechPluginAutoGenerator.json")
var env = yeoman.createEnv();

//const grunt = require.resolve('grunt',{paths: ['C:\\Users\\l.nodari\\AppData\\Roaming\\nvm\\v16.13.2\\node_modules']});

//env.register(require.resolve('generator-arxivar-plugins'));
// env.register(require.resolve('generator-arxivar-plugins:command'));

env.lookup();

var aaa = env.getGeneratorNames()
var bbb = env.getGeneratorsMeta()

// console.log('AAAAAAAA: ' + JSON.stringify(aaa))
// console.log('BBBBBBBB: ' + JSON.stringify(bbb))

const runNpmInstall = pluginDirectory => {
  console.log("Sto eseguendo l'npm install del plugin nella cartella " + pluginDirectory + ' ...')
  return new Promise((resolve, reject) => {
    exec('npm i', (error, stdout, stderr) => {
      if (error) {
        console.log('Npm install è terminato con gli errori', error, stderr)
        reject()
      } else {
        console.log('Npm install è andato a buon fine!', stdout)
        resolve()
      }
    })
  })
}

const runNpmRunWebpack = pluginDirectory => {
  console.log("Sto eseguendo l'npm run webpack del plugin nella cartella " + pluginDirectory + ' ...')
  exec('npm run webpack', (error, stdout, stderr) => {
    if (error) {
      console.log('Npm run webpack è terminato con gli errori', error, stderr)
    } else {
      console.log('Npm run webpack è andato a buon fine!', stdout)
    }
  })
}

abletechPlugins.forEach(plugin => {
  env.run(plugin.pluginType.replace(/'/g, '"'), {
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
      arxPath: plugin.arxPath
    }
  }).then(() => {
    const pluginDirectory = process.cwd()
    plugin.typescript ? runNpmInstall(pluginDirectory).then(() => runNpmRunWebpack(pluginDirectory)) : null
  });
})
