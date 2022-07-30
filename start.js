const path = require('path');
const esmRequire = require('esm')(module, { cjs: { topLevelReturn: true }});
const dotenv = require('dotenv');
dotenv.config();

global.appRoot = path.resolve(__dirname);

esmRequire('module-alias/register');
esmRequire('./src/server.js');