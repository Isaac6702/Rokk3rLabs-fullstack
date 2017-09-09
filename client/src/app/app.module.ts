import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, 
  MdPaginatorModule ,MdSortModule, MdDialogModule, MdFormFieldModule }   from '@angular/material';
import 'hammerjs';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { TaskList } from './pages/task-list/task-list';

//Directive
import { EqualValidator } from "./common/directive/equal-validator.directive";

//Component
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { AddTaskComponent } from './component/add-task/add-task.component'
import { UpdateTaskComponent } from './component/update-task/update-task.component'

@NgModule({
  declarations: [
    AppComponent,
    SimpleLayoutPage,
    TaskList,
    EqualValidator,
    TableComponent,
    AddTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdPaginatorModule,
    MdSortModule,
    FormsModule,
    MdDialogModule,
    MdFormFieldModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTaskComponent, UpdateTaskComponent]
})
export class AppModule { }
