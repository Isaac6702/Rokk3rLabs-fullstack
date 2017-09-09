import { Component } from '@angular/core';
import { TaskService } from '../../providers/task.service';
import * as moment from 'moment'
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AddTaskComponent } from '../../component/add-task/add-task.component'

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
        public dialog: MdDialog
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
            });

        this.taskService.tasks('completed')
            .then(tasks => {
                this.completedTasks = tasks.docs.map(task => {
                    const { dueDate } = task;
                    task.dueDate = moment(dueDate).format('DD/MM/YYYY');
                    return task;
                });
            });
    }


    openDialog(): void {
        let dialogRef = this.dialog.open(AddTaskComponent, {
            width: '250px',
            data: { name: '', priority: '', dueDate: '' }
        });

        dialogRef.afterClosed().subscribe(newTask => {
            if (newTask) {
                const { dueDate } = newTask
                this.taskService.create({ ...newTask, dueDate: moment(dueDate, 'DD/MM/YYYY').toISOString() })
                    .then(task => {
                        const { dueDate } = task
                        task.dueDate = moment(dueDate).format('DD/MM/YYYY')
                        this.tasks = [...this.tasks, task];
                    })
            }
        });
    }
}
