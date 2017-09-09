import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Sort } from '@angular/material';
import { TaskService } from '../../providers/task.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment'
import { UpdateTaskComponent } from '../../component/update-task/update-task.component'

@Component({
    selector: 'task-table',
    templateUrl: 'table.component.html',
    providers: [TaskService]
})

export class TableComponent implements OnInit, OnChanges {
    @Input() tasks: any;
    @Input() type: string;
    sortedData: any;

    constructor(
        private taskService: TaskService,
        public dialog: MdDialog
    ) {
    }

    ngOnInit() {
        this.sortedData = this.tasks && this.tasks.slice();
    }

    ngOnChanges() {
        this.sortedData = this.tasks && this.tasks.slice();
    }
    sortData(sort: Sort) {
        const data = this.tasks.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            let isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return this.compare(a.name, b.name, isAsc);
                case 'duedate': return this.compare(+a.dueDate, +b.dueDate, isAsc);
                case 'priority': return this.compare(+a.priority, +b.priority, isAsc);
                default: return 0;
            }
        });
    }

    compare(a, b, isAsc): any {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    update(task: any) {
        let dialogRef = this.dialog.open(UpdateTaskComponent, {
            width: '250px',
            data: { id: task.id, name: task.name, priority: task.priority, dueDate: task.dueDate }
        });

        dialogRef.afterClosed().subscribe(newTask => {
            if (newTask) {
                const { dueDate } = newTask
                this.taskService.update(task.id, { ...newTask, dueDate: moment(dueDate, 'DD/MM/YYYY').toISOString() })
                    .then(() => {
                        const { dueDate } = task
                        task.dueDate = moment(dueDate).format('DD/MM/YYYY')
                        this.tasks = this.tasks.map(element => {
                            return element.id === newTask.id ? newTask : element;
                        })
                        this.sortedData = this.tasks
                    })
            }
        });
    }

    remove(task: any) {
        this.taskService.remove(task.id)
            .then(() => {
                this.sortedData = this.sortedData.filter(element => element.id != task.id)
            })
    }

    completed(task: any) {
        this.taskService.completed(task.id)
            .then(() => {
                this.sortedData = this.sortedData.filter(element => element.id != task.id)
            })
    }
}