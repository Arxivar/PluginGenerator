// AbletechPluginAutoGenerator.mjs   (Node ≥ 20 con "type":"module")
import { createEnv } from 'yeoman-environment';
import { readFile } from 'node:fs/promises';
import { exec as execCb } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { promisify } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const exec = promisify(execCb);
const pluginsCfg = JSON.parse(
	await readFile(new URL('./AbletechPluginAutoGenerator.json', import.meta.url), 'utf8')
);

// ────────────────────────────────────────────────────────────────────────────
// helper
async function run(cmd, cwd) {
	console.log(`∙ ${cmd}  (cwd: ${cwd})`);
	try {
		const { stdout, stderr } = await exec(cmd, { cwd });
		if (stdout) console.log(stdout);
		if (stderr) console.error(stderr);
	} catch (err) {
		console.error(`✖ "${cmd}" failed`, err);
		throw err;
	}
}

// ────────────────────────────────────────────────────────────────────────────
for (const plugin of pluginsCfg) {
	// 1) creo un env nuovo ad ogni giro
	const env = createEnv();
	env.lookup();                 // carica i generatori sotto ./generators

	const pluginGenerator = plugin.pluginType.replace(/'/g, '"');

	// 2) path dove (eventualmente) compilare il TS
	const baseGitPath = 'C:/git';
	const portalPluginRelativePath = 'ArxivarNext/Web/ARXivarSuite/Abletech.Arxivar.Client.Web.Portal/Scripts/plugins';
	const fullPathPortalPlugins = join(baseGitPath, portalPluginRelativePath, plugin.pluginname);

	const arxPath = plugin.typescript ? (plugin.arxPath || fullPathPortalPlugins) : undefined;

	console.log(`\n=== Genero "${plugin.pluginname}" (${pluginGenerator}) ===`);

	// 3) eseguo il generatore
	await env.run(pluginGenerator, {
		destinationRoot: __dirname,
		force: true,
		arxivarPluginSettings: {
			...plugin,
			arxPath
		}
	});

	// 4) se TS: npm install + webpack && aspetto che finisca
	if (plugin.typescript) {
		const pluginDir = join(__dirname, 'plugins-ts', plugin.pluginname);
		await run('npm i --no-audit --no-fund', pluginDir);
		await run('npx webpack --config webpack.config.js --progress --mode=production', pluginDir);
	}
}

console.log('\n✅  Tutti i plugin sono stati generati con successo.');
