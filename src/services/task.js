import Task from '../models/task'
import { BadRequestException } from '../helpers/exception'
import { paginate } from '../helpers/utils'

export async function create (taskReq) {
  const task = new Task(taskReq)
  await task.save()
  return task
}

export async function update (idTask, taskData) {
  const task = await Task.findOne({ _id: idTask })
  if (!task) {
    throw new BadRequestException(`Task with id ${idTask} does not exist`)
  }
  const { name, dueDate, priority } = taskData
  task.name = name
  task.dueDate = dueDate
  task.priority = priority
  await task.save()
  return task
}

export async function find (status, sortReq) {
  const find = {}
  const options = {
    sort: paginate.sort(sortReq)
  }
  if (status) {
    find.status = status
  }
  const tasks = await Task.paginate(find, options)
  return tasks
}

export async function remove (idTask) {
  const task = await Task.findOne({ _id: idTask })
  if (!task) {
    throw new BadRequestException(`Task with id ${idTask} does not exist`)
  }
  await task.remove()
  return task
}

export async function completed (idTask) {
  const task = await Task.findOne({ _id: idTask })
  if (!task) {
    throw new BadRequestException(`Task with id ${idTask} does not exist`)
  }
  if (task.status === 'completed') {
    return task
  }
  task.status = 'completed'
  await task.save()
  return task
}
