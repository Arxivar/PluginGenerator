[![Arxivar](http://portal.arxivar.it/download/resources/loghi/Logo-ARXivar_orizzontale-nero.png)](http://www.arxivar.it/)

# generator-arxivar-plugins

> Generator for ARXivar client plugins

## Installation

- Install [Node.js](https://nodejs.org/) in case you don't already have it (LTS version should be fine).

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

you should see generator-arxivar-plugins listed between the available generators.

_Note: The installation process described above needs to be done *ONE TIME ONLY*, not every time you need to use the generator._

## Run the generator

- Once you've finished the installation successfully, you can open a command prompt and run the generator FROM ANY FOLDER ON YOUR MACHINE with:

```bash
yo arxivar-plugins
```

_Note: This command lists the available sub-commands to generate one of the 3 available plugins (Plugin command, Plugin route, Plugin widget desktop, Plugin widget task); it's an "information-only" command. If you want to effectively create a plugin follow the ouput instructions of this command._

- Read the output of the previous command and run the command you want to generate your plugin (the generator will require some input in order to generate your plugin).

_Remember: you can generate your plugin anywhere, but you will have to place it in a subfolder of Scripts/plugins/ (path of ARXivarPortal) in order to use it._


## Use Typescript

To use Typescript you will have to follow these steps:

- select true in generator options, your plugin will be in plugin-ts folder.

- (optional but recommended) specify your ARXivar portal path for the compiled plugin in generator options. 

- open the terminal into your plugin folder and install the node_modules locally using the command:

```bash
  npm install
```

- run webpack with this command:

```bash
  npm run webpack
```

_Remember: if you specify the path in the options, you'll not need to follow the steps below. Your plugin already running in ARXivar._

- now a new subfolder named '`your plugin name`' has been created, in this folder you will find the javascript compiled files. 

- When you finish to develope your plugin, you have to copy the compiled files folder mentioned above in Scripts/plugins/ (path of ARXivarPortal) in order to use it.


## Documentation

You can find the documentation of the current version [here](docs/globals.md)

## License

© [Abletech S.r.l.](http://www.arxivar.it/)
