# Run TeamsFx Bot in Codespaces

## Steps to debug:
1. Open the repo in Codespaces.
1. Click `Teams Toolkit` icon from the left sidebar and Sign in M365 account.
   > **Note**:
   > After login your M365 account, it will be redirected to a localhost endpoint like `http://localhost:xxx/?code=xxxxxxxxx`.
   >
   > Copy the localhost endpoint from the address bar and run below command in the VS Code terminal in Codespaces:  `curl <localhost-endpoint>`  
   >
   > Then you should login your M365 account.
1. Run `F5`.
1. After the teams web client is launched, to send a POST request to trigger notification, run below command in the VS Code terminal in Codespaces:
   `curl -X POST http://localhost:3978/api/notification`
