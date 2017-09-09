import Mongoose from 'mongoose'
import Promise from 'bluebird'

import config from '../config'

import Task from '../models/task'
import tasksData from './data/task'

Mongoose.Promise = Promise

async function loadData () {
  try {
    console.log(`Running seeds`)
    await Task.remove({})
    await Task.create(tasksData)
    Mongoose.connection.close()
    console.log(`The process finished`)
    process.exit()
  } catch (err) {
    console.log(`error: `, err)
  }
}

Mongoose.connect(config.db.mongo, { useMongoClient: true })
const mongo = Mongoose.connection

mongo
  .on('error', console.log)
  .once('open', loadData)
