import path from 'path'
import dev from './dev'
import qa from './qa'
import test from './test'
import docker from './docker'

const defaults = {
  root: path.join(__dirname, '../..')
}

const config = {
  dev: Object.assign(dev, defaults),
  qa: Object.assign(qa, defaults),
  test: Object.assign(test, defaults),
  docker: Object.assign(docker, defaults)
}[process.env.NODE_ENV || 'dev']
export default config
