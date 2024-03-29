#!/bin/bash
######################
# node-jsdom-starter #
######################

# To make this file runnable:
#     $ chmod +x *.sh.command

banner="node-jsdom-starter"
projectHome=$(cd $(dirname $0); pwd)

setupTools() {
   cd $projectHome
   echo
   echo $banner
   echo $(echo $banner | sed s/./=/g)
   pwd
   test -d .git || { echo "Project must be in a git repository."; exit; }
   git restore dist/* &>/dev/null
   git pull --ff-only
   echo
   echo "Node.js:"
   which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
   node --version
   npm install --no-fund
   npm update
   npm outdated
   echo
   }

runApp() {
   cd $projectHome
   npm test
   echo "-----"
   node app.js
   echo "-----"
   echo
   }

setupTools
runApp
