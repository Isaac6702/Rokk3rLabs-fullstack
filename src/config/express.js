import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerTools from 'swagger-tools'
import path from 'path'

import errorMessages from '../services/middlewares/error_messages'
import errorResponse from '../services/middlewares/error_response'
import config from './index'
import routes from '../routes'

const app = express()

app.disable('x-powered-by')
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({
  extended: true
}))

if (config.app.env === 'dev' || config.app.env === 'qa') {
  app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(cors())

// future add swagger and api error
app.use(config.app.path, routes)

app.use(errorMessages)

app.use(errorResponse)

app.locals.config = config

const options = {
  swaggerDefinition: {
    info: {
      title: 'rokk3rlabs-backend',
      version: '1.0.0'
    }
  },
  apis: [
    `${path.resolve()}/src/routes/*.js`,
    `${path.resolve()}/src/models/*.js`
  ]
}

const swaggerSpec = swaggerJSDoc(options)

swaggerTools.initializeMiddleware(swaggerSpec, (middleware) => {
  app.use(middleware.swaggerUi({
    apiDocs: `${config.app.path}/docs.json`,
    swaggerUi: `${config.app.path}/docs`,
    apiDocsPrefix: config.app.basePath,
    swaggerUiPrefix: config.app.basePath
  }))
})

export default app
