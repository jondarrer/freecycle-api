/*eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
let config;

switch (String.prototype.toLowerCase.apply(process.env.NODE_ENV || 'production')) {
  case 'production':
    config = require('./config.production');
    break;
  default:
    config = require('./config.dev');
}

module.exports = config;