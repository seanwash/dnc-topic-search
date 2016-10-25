var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://api.simplecast.com/v1/podcasts/1386/episodes.json?api_key=sc_1BL-JpE96slFCZI-fFapsQ"'
})
