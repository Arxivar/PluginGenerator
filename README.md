[![Arxivar](http://www.arxivar.it/download/resources/loghi/Logo-ARXivar_orizzontale-nero.png)](http://www.arxivar.it/)

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
go inside the "generator-arxivar-plugins" folder and type "npm link"
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

## Documentation

You can find the documentation of the current version [here](docs/globals.md)

## License

© [Abletech S.r.l.](http://www.arxivar.it/)
