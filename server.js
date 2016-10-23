'use strict'

require('dotenv').config()

const Hapi = require('hapi')
const server = new Hapi.Server()
const https = require('https')

const settings = {
  host: process.env.HOST,
  port: process.env.PORT
}

server.connection({
  host: settings.host,
  port: settings.port
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    https.get(`https://api.simplecast.com/v1/podcasts/1386/episodes.json?api_key=${process.env.API_KEY}`, (res) => {
      let body

      res.on('data', (chunk) => {
        body += chunk
      })

      res.once('end', () => {
        try {
          // TODO: Remove this hack - simplecast's API is adding the 'undefined'
          // to the beginning of the response outside of the episodes array
          body = body.replace('undefined', '')
          let parsed = JSON.parse(body)
          return reply(parsed)
        } catch (err) {
          console.error('Unable to parse response as JSON', err)
          return reply(err)
        }
      })
    })
  }
})

server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server started on port ${settings.port}`)
})
