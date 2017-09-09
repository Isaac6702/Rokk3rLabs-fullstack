import express from 'express'
import validate from 'express-validation'

import Task from '../controllers/task'
import TaskValidator from '../services/param_validations/task'

const router = express.Router()

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     tags:
 *       - Tasks
 *     description: create task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: task
 *         in: body
 *         required: true
 *         description: task fields
 *         schema:
 *          $ref: '#/definitions/Task'
 *     responses:
 *      200:
 *        description: task created
 *        schema:
 *          $ref: '#/definitions/ReqTask'
 */
router.route('/v1/tasks').post(validate(TaskValidator.create), Task.create)

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     tags:
 *       - Tasks
 *     description: create task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: status
 *         description: task status ('pending', 'completed')
 *         in: query
 *         required: false
 *         type: string
 *       - name: sort
 *         description: sort the list
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *      200:
 *        description: task created
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/definitions/ReqTask'
 */
router.route('/v1/tasks').get(Task.find)

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     tags:
 *       - Tasks
 *     description: update task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description:  Task id
 *         in: path
 *         required: true
 *         type: string
 *       - name: task
 *         in: body
 *         required: true
 *         description: task fields
 *         schema:
 *          $ref: '#/definitions/Task'
 *     responses:
 *      200:
 *        description: ok
 */
router.route('/v1/tasks/:id').put(validate(TaskValidator.update), Task.update)

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     tags:
 *       - Tasks
 *     description: delete task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description:  Task id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: ok
 */
router.route('/v1/tasks/:id').delete(validate(TaskValidator.remove), Task.remove)

/**
 * @swagger
 * /api/v1/tasks/{id}/completed:
 *   patch:
 *     tags:
 *       - Tasks
 *     description: completed task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description:  Task id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: ok
 */
router.route('/v1/tasks/:id').patch(validate(TaskValidator.completed), Task.completed)

export default router
