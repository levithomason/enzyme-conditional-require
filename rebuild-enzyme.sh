#!/usr/bin/env bash
#
# Rebuilds enzyme with our hijacked react-compat.js

echo "...copy react-compat.js to enzyme"
cp react-compat.js node_modules/enzyme/src/react-compat.js

echo "...install enzyme deps"
cd node_modules/enzyme && npm i

echo "...rebuild enzyme"
npm run build
