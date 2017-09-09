import Joi from 'joi'

export default {
  create: {
    body: {
      name: Joi.string().required(),
      dueDate: Joi.date().required(),
      priority: Joi.number().integer().min(1).max(5).required()
    }
  },
  update: {
    params: {
      id: Joi.strict().required()
    },
    body: {
      name: Joi.string().required(),
      dueDate: Joi.date().required(),
      priority: Joi.number().integer().min(1).max(5).required()
    }
  },
  remove: {
    params: {
      id: Joi.strict().required()
    }
  },
  completed: {
    params: {
      id: Joi.strict().required()
    }
  }
}
