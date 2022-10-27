#!/bin/bash

TEAMS_APP_ID=$(cat .fx/states/state.local.json | jq -r '.["fx-resource-appstudio"].teamsAppId')
npx open-cli "https://teams.microsoft.com/_#/l/app/${TEAMS_APP_ID}?installAppPackage=true&webjoin=true"