const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

function parse(content) {
	const result = {};
	const lines = content.toString().split('\n');
	for (const line of lines) {
		const match = line.match(/^([^=:#]+?)[=:](.*)/);
		if (match) {
			const key = match[1].trim();
			const value = match[2].trim().replace(/['"]+/g, '');
			result[key] = value;
		}
	}
	return result;
}

const localEnvPath = path.join(__dirname, "..", "env", "/.env.local");
const localEnvContent = fs.readFileSync(localEnvPath, "utf-8");
const localEnv = parse(localEnvContent);
const teamsAppId = localEnv["TEAMS_APP_ID"];
const url = `https://teams.microsoft.com/l/app/${teamsAppId}?installAppPackage=true&webjoin=true`;
child_process.execFile("npx", ["open-cli", url], { shell: false });