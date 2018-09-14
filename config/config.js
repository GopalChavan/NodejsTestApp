var dev = require('./dev.env.js');
var test = require('./test.env.js');
const config = {
  dev,
  test
}
module.exports = process.env.env == "test" ? config.test : config.dev