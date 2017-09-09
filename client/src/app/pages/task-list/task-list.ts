import { Component } from '@angular/core';
import { TaskService } from '../../providers/task.service';
import * as moment from 'moment'

@Component({
    templateUrl: './task-list.html',
    providers: [TaskService]
})

export class TaskList {
    tasks: any;
    overdueTasks: any;
    completedTasks: any;

    constructor(
        private taskService: TaskService,
    ) {
        const now = moment();
        this.tasks = [];
        this.overdueTasks = [];
        this.completedTasks = [];
        this.taskService.tasks(null)
            .then(tasks => {
                this.tasks = tasks.docs.map(task => {
                    const { dueDate } = task;
                    task.dueDate = moment(dueDate).format('DD/MM/YYYY');
                    return task;
                });
                this.overdueTasks = this.tasks.filter(task => {
                    if (moment(task.dueDate, 'DD/MM/YYYY').isBefore(now)) {
                        return true;
                    }
                })
            })

        this.taskService.tasks('completed')
            .then(tasks => {
                this.completedTasks = tasks.docs.map(task => {
                    const { dueDate } = task;
                    task.dueDate = moment(dueDate).format('DD/MM/YYYY');
                    return task;
                });
            })
    }
}
