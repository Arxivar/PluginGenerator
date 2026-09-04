import chalk from 'chalk';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { input as inputPrompt } from '@inquirer/prompts';
import AppGenerator from '../app/index.js';

/* GUID in forma canonica 8-4-4-4-12 senza graffe: e' cio' che Guid.TryParse accetta per il
   PluginId ed e' anche la forma richiesta dal project id del .sln (che aggiunge lui le graffe). */
const PLUGIN_ID_PATTERN = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

/* System.Version: da 2 a 4 componenti numeriche. Niente suffissi di pre-release (1.0.0-beta). */
const PLUGIN_VERSION_PATTERN = /^\d+\.\d+(\.\d+){0,2}$/;

export default class ArxAiPluginGenerator extends AppGenerator {
  /* ---------------------------------------------------------------------- */
  /*  PROMPTING                                                            */
  /* ---------------------------------------------------------------------- */
  async prompting() {
    this.log(`Running ${chalk.red('ARXAI PLUGIN')} generator!`);

    /* 1) Settings di base. ArxAI non usa minVersion/requireRefresh/injectParams/
          dependencies/typescript/arxPath/author: restano pluginname, description,
          id (-> PluginId GUID), label (-> displayName), icon, version.
          L'SDK contract e' agganciato come pacchetto NuGet (ARXivar.ArxAI.Plugins),
          quindi non serve piu' alcun path al progetto.

          id e version sono esclusi e richiesti qui sotto: il costruttore di
          ArxAiPluginAttribute li parsa (Guid.TryParse / Version.TryParse) e solleva
          ArgumentException se non sono validi, quindi la validazione lasca del prompt
          condiviso produrrebbe un plugin che muore alla discovery. */
    /** @type {import('../../types.js').Props} */
    const props = await this._askRequiredSettings({
      exclude: ['minVersion', 'requireRefresh', 'injectParams', 'dependencies', 'typescript', 'arxPath', 'author', 'id', 'version'],
    });

    props.id = await this._askPluginId(props.id);
    props.version = await this._askPluginVersion(props.version);

    /* 2) Post-process */
    props.guid = uuidv4(); // SolutionGuid del .sln
    this.props = props;
  }

  /* ---------------------------------------------------------------------- */
  /*  PROMPT SPECIFICI ARXAI                                               */
  /* ---------------------------------------------------------------------- */

  /** PluginId: deve essere un GUID, finisce sia nell'attributo che nel project id del .sln. */
  async _askPluginId(provided) {
    const validate = (value) => PLUGIN_ID_PATTERN.test(String(value).trim())
      ? true
      : 'The plugin id must be a GUID in the 8-4-4-4-12 form, without braces';

    return this._resolveSetting('id', provided, validate, () => inputPrompt({
      message: 'Your plugin unique identifier (GUID)',
      default: uuidv4(),
      required: true,
      validate,
    }));
  }

  /** Version: deve essere parsabile come System.Version (2-4 componenti numeriche). */
  async _askPluginVersion(provided) {
    const validate = (value) => PLUGIN_VERSION_PATTERN.test(String(value).trim())
      ? true
      : 'The plugin version must have 2 to 4 numeric components (e.g. 1.0.0), with no pre-release suffix';

    return this._resolveSetting('version', provided, validate, () => inputPrompt({
      message: 'Plugin version',
      default: '1.0.0',
      required: true,
      validate,
    }));
  }

  /**
   * Restituisce il valore di un setting validato. Se e' gia' stato fornito (autogenerazione via
   * arxivarPluginSettings) lo valida senza chiedere nulla e fallisce subito con un messaggio
   * esplicito, invece di generare un plugin che si rompe a runtime; altrimenti lo chiede.
   */
  async _resolveSetting(name, provided, validate, prompt) {
    if (provided === undefined) {
      return (await prompt()).trim();
    }

    const value = String(provided).trim();
    const outcome = validate(value);
    if (outcome !== true) {
      throw new Error(`Invalid '${name}' setting "${provided}": ${outcome}`);
    }

    return value;
  }

  /* ---------------------------------------------------------------------- */
  /*  WRITING                                                              */
  /* ---------------------------------------------------------------------- */
  writing() {
    const tpl = { ...this.props, props: this.props };
    this.destinationRoot(path.join('./plugins-arxai', this.props.pluginname));

    const pluginName = this.props.pluginname;
    const classFilename = `${pluginName}Plugin.cs`;
    const csprojFilename = `${pluginName}.csproj`;
    const solutionFilename = `${pluginName}.sln`;

    this.fs.copyTpl(this.templatePath('ArxAiPluginTemplate.cs'), this.destinationPath(`${pluginName}/${classFilename}`), tpl);
    this.log(chalk.green('Written file: ' + classFilename));

    this.fs.copyTpl(this.templatePath('ClassLibraryTemplate.csproj'), this.destinationPath(`${pluginName}/${csprojFilename}`), tpl);
    this.log(chalk.green('Written file: ' + csprojFilename));

    this.fs.copyTpl(this.templatePath('solutionTemplate.sln'), this.destinationPath(solutionFilename), tpl);
    this.log(chalk.green('Written file: ' + solutionFilename));

    this.log(chalk.green('********** ' + pluginName + ' folder created into plugins-arxai **********'));
  }
}
