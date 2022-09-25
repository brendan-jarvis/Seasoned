const server = require('./server')

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}

import server from './server'
const path = require('path')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 3000

const envPath = path.join(__dirname, '../..env')
dotenv.config({ path: envPath })

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
