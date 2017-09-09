import config from '../../config'

export default (err, req, res, next) => {
  err.stack = config.app.env === 'dev' ? err.stack : undefined
  return res.status(err.code).json(err)
}
