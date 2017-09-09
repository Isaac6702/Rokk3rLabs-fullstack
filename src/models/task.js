import mongoose from 'mongoose'
import paginate from 'mongoose-paginate'
import uniqueValidator from 'mongoose-unique-validator'
import fieldRemover from 'mongoose-field-remover'

const Schema = mongoose.Schema

/**
 * @swagger
 * definitions:
 *   Task:
 *     type: object
 *     required:
 *       - name
 *       - dueDate
 *       - priority
 *     properties:
 *       name:
 *         type: string
 *       dueDate:
 *         type: string
 *         format: date

 *       priority:
 *         type: string
 *   ReqTask:
 *     allOf:
 *      - $ref: '#/definitions/Task'
 *     required:
 *       - id
 *       - status
 *     properties:
 *       id:
 *         type: string
 *       status:
 *         type: string
 */
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  priority: {
    type: Number,
    min: 1,
    max: 5
  }

},
  {
    collection: 'task',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

TaskSchema.plugin(uniqueValidator)
TaskSchema.plugin(paginate)
TaskSchema.plugin(fieldRemover)

export default mongoose.model('Task', TaskSchema)
