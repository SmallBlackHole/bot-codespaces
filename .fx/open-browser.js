const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

const localStateString = fs.readFileSync(path.join(__dirname, "states", "/state.local.json"), "utf-8");
const localState = JSON.parse(localStateString);
const teamsAppId = localState["fx-resource-appstudio"].teamsAppId;
const url = `https://teams.microsoft.com/l/app/${teamsAppId}?installAppPackage=true&webjoin=true`;
child_process.execFile("npx", ["open-cli", url], { shell: false });