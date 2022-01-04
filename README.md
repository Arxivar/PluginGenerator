[![Arxivar](http://portal.arxivar.it/download/resources/loghi/Logo-ARXivar_orizzontale-nero.png)](http://www.arxivar.it/)

# generator-arxivar-plugins

> Generator for ARXivar client plugins

## Installation

- Install [Node.js](https://nodejs.org/) if you don't already have it (LTS version should be fine).

- When node has finished installing, install [Yeoman](http://yeoman.io): open a command prompt and run the following command:

```bash
npm install -g yo
```

_Note: npm is the package manager for Node.js and comes bundled with it._

- You can now download this project (download the .zip file or clone the repo, it's the same) and:

```bash
go inside the "PluginGenerator" folder and type "npm link"
```

- Now with the command:

```bash
yo -h
```

you should see Arxivar Plugins listed between the available generators.

_Note: The installation process described above needs to be done *ONE TIME ONLY*, not every time you need to use the generator._

## Run the generator

- Once you've finished the installation successfully, you can open a command prompt and run the generator FROM ANY FOLDER ON YOUR MACHINE with:

```bash
yo arxivar-plugins
```

_Note: This command lists the available sub-commands to generate one of the available plugins (Plugin command,Plugin command profilation, Plugin route, Plugin widget desktop, Plugin widget task, Plugin Link Workflow V2); it's an "information-only" command. If you want to effectively create a plugin follow the ouput instructions of this command._

- Read the output of the previous command and run the command you want to generate your plugin (the generator will require some input in order to generate your plugin).

_Remember: you can generate your plugin anywhere, but you will have to place it in a subfolder of Scripts/plugins/ (path of ARXivarPortal) in order to use it, or upload it with CLI if it's a Plugin Link Workflow V2_


## Use Typescript

To use Typescript you have to follow these steps:

- select true in Typescript generator options (the plugin is going to create a new sub-folder in plugin-ts folder)

- specify the name of the compiled plugin folder. (optionaly your can spacify the folder _YourARXivarPortalPath\Script\plugins\yourPluginName_ for an automatic deploy)
  
- install [NodeJs v12.14.1 ](https://nodejs.org/uk/blog/release/v12.14.1/)

- open the terminal into your plugin folder and run the command:

```bash
  npm install
```

- execute webpack with running the command:

```bash
  npm run webpack
```

_Remember: if you specify the path in the options, you dont need to follow the steps below. Your plugin is already running in ARXivar._

- once you have done the developement of your plugin, you have to copy the compiled plugin folder  _YourARXivarPortalPath\Script\plugins\yourPluginName_ in order to use it.


## Plugin Link Workflow V2

To create Plugin Link Workflow V2 you have to follow the required question from the generator.

You can choose between 2 types of configurations: Advanced or not. In the Advanced one you can also manage the front end, both Javascript and Typescript.

Click [here](https://github.com/Arxivar/SamplePlugins/tree/master/LinkWorkflowV2/) in order to see how to install and configure your plugin link. 

## Documentation

You can find the documentation of the current version [here](docs/README.md)

## License

© [Abletech S.r.l.](http://www.arxivar.it/)
