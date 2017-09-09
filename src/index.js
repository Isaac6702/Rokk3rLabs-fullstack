import Mongoose from 'mongoose'
import Promise from 'bluebird'

import config from './config'
import app from './config/express'

Mongoose.Promise = Promise

function listen () {
  const { port, env, path, host } = config.app
  app.listen(config.app.port, () => {
    console.log(`Environment: ${env}`)
    console.log(`Express server listening on port ${port}`)
    console.log(`swagger: ${host}:${port}${path}/docs`)
  })
}

Mongoose.connect(config.db.mongo, { useMongoClient: true })
const mongo = Mongoose.connection

mongo
  .on('error', console.log)
  .once('open', listen)

export default app
