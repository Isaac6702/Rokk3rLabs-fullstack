import { Component, Inject, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'update-task',
    templateUrl: './update-task.component.html'
})

export class UpdateTaskComponent {
    @Input() title;
    name: string;
    priority: string;
    dueDate: string;

    constructor(
        public dialogRef: MdDialogRef<UpdateTaskComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { 
        }

    onNoClick(): void {
        this.dialogRef.close();
    }

}