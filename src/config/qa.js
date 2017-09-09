export default {
  app: {
    env: 'qa',
    host: process.env.HOST || 'http://127.0.0.1',
    path: '/api',
    basePath: '/',
    port: 3000
  },
  db: {
    mongo: 'mongodb://127.0.0.1:27017/test'
  }
}
