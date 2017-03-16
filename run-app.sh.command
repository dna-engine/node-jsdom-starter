#!/bin/sh
############################
# dnajs-node-jsdom-starter #
############################

# To make this file runnable:
#    $ chmod +x *.sh.command

update() {
    which node || alert "Need to install node: https://nodejs.org"
    echo "Node.js $(node --version)"
    npm update
    echo
    }

echo
echo "dnajs-node-jsdom-starter"
echo "========================"
cd $(dirname $0)
pwd
update
node app.js
echo
