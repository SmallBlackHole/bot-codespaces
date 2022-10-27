const fs = require("fs");
const open = require("open");

const localStateString = fs.readFileSync(".fx/states/state.local.json", "utf-8");
const localState = JSON.parse(localStateString);
const teamsAppId = localState["fx-resource-appstudio"].teamsAppId;
open(`https://teams.microsoft.com/_#/l/app/${teamsAppId}?installAppPackage=true&webjoin=true`)