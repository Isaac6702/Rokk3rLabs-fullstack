import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Sort } from '@angular/material';
import { TaskService } from '../../providers/task.service';

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
    ) {
    }

    ngOnInit() {
        this.sortedData = this.tasks && this.tasks.slice();
        console.log('type--->', this.type)
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