export default {
  app: {
    env: 'dev',
    host: process.env.HOST || 'http://127.0.0.1',
    path: '/api',
    basePath: '/',
    port: 3000
  },
  db: {
    mongo: 'mongodb://mongo:27017/test'
  }
}
