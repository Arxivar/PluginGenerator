import chalk from 'chalk';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import AppGenerator from '../app/index.js';

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
          quindi non serve piu' alcun path al progetto. */
    /** @type {import('../../types.js').Props} */
    const props = await this._askRequiredSettings({
      exclude: ['minVersion', 'requireRefresh', 'injectParams', 'dependencies', 'typescript', 'arxPath', 'author'],
    });

    /* 2) Post-process */
    props.guid = uuidv4(); // SolutionGuid del .sln
    this.props = props;
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
