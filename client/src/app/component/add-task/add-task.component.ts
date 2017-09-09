import { Component, Inject, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html'
})

export class AddTaskComponent {
    name: string;
    priority: string;
    dueDate: string;

    constructor(
        public dialogRef: MdDialogRef<AddTaskComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { 
        }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSaveClick(): void {
        this.data = {
            'name': this.name,
            'priority': this.priority,
            'dueDate': this.dueDate
        }
        this.dialogRef.close();
    }

}