[![Arxivar](http://portal.arxivar.it/download/resources/loghi/Logo-ARXivar_orizzontale-nero.png)](http://www.arxivar.it/)

# generator-arxivar-plugins

> Generator for ARXivar client plugins

## Installation

- install [NodeJs](https://nodejs.org/en/) if you don't already have it. Both Node.js 22 and Node.js 24 (**LTS versions**) are supported.

- When nodejs has finished installing, install [Yeoman](http://yeoman.io): open a command prompt and run the following command:

```bash
npm install -g yo@7
```

_Note: npm is the package manager for Node.js and comes bundled with it._

- You can now download this project (download the .zip file or clone the repo, it's the same), go inside the "PluginGenerator" folder and type the following command:

```bash
npm link
```

- then run the command:

```bash
npm install
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
  
- install [NodeJs](https://nodejs.org/en/) if you don't already have it (LTS version 22.15.0 should be fine).

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

## AI plugins (ArxAI)

Besides the classic client plugins, the generator can also scaffold **ArxAI plugins**: .NET class libraries that extend the ARXivar AI assistant by exposing tools and instructions to the AI agent.

Run:

```bash
yo arxivar-plugins:arxai-plugin
```

The generated project (created under a `plugins-arxai/` subfolder) contains a `*.sln`, a `*.csproj` and a plugin class that:

- exposes methods marked with `[Description(...)]` as **tools** callable by the AI agent;
- contributes an **instructions** fragment appended to the chatbot instructions (`GetInstructions`);
- supports configurable `[Parameter(...)]` values, including confidential ones stored encrypted;
- manages its lifecycle through `InitializeAsync` / `DisposeAsync` hooks.

The ArxAI plugin SDK is referenced as a NuGet package (`ARXivar.ArxAI.Plugins`), so no path to an external project is required. Building the project automatically packages the plugin DLL, its external dependencies and the `.deps.json` into a `*.zip` under `bin\<Configuration>\`, ready to be uploaded to the ArxAI host.

Use the `Abletech.Arxivar.ArxAI.Plugins.Cli` tool to manage plugins in the ArxAI catalog:

```bash
dotnet Abletech.Arxivar.ArxAI.Plugins.Cli.dll upload -p "path\to\YourPlugin.zip"
```

Other available commands are `update`, `delete` and `list` (add `-v` to also print configured parameters).

## Documentation

You can find the documentation of the current version [here](docs/README.md)

## License

© [Abletech S.p.A.](http://www.arxivar.it/)
