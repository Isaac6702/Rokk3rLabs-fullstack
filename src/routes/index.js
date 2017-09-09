import express from 'express'

import task from './task'

const router = express.Router()

/**
 * @swagger
 * /api/v1/time:
 *   get:
 *     tags:
 *       - Times
 *     description: Returns current time
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Current time
 *         schema:
 *           properties:
 *             time:
 *               type: string
 *               format: date-time
 */

router.get('/v1/time', (req, res) => {
  const time = new Date()
  res.json({ time })
})

router.use(task)

export default router
