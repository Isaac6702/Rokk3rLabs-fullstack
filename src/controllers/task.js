import {create as createTask, find as findTask, update as updateTask, remove as removeTask, completed as completedTask} from '../services/task'

const TaskController = {
  create (req, res, next) {
    createTask(req.body)
    .then(req => res.json(req))
    .catch(err => next(err))
  },
  find (req, res, next) {
    findTask(req.query.status, req.query.sort)
    .then(req => res.json(req))
    .catch(err => next(err))
  },
  update (req, res, next) {
    updateTask(req.params.id, req.body)
    .then(req => res.json())
    .catch(err => next(err))
  },
  remove (req, res, next) {
    removeTask(req.params.id)
    .then(req => res.json())
    .catch(err => next(err))
  },
  completed (req, res, next) {
    completedTask(req.params.id)
    .then(req => res.json())
    .catch(err => next(err))
  }
}

export default TaskController
