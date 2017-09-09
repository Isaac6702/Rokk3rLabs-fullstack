import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, 
  MdPaginatorModule ,MdSortModule }   from '@angular/material';
import 'hammerjs';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { TaskList } from './pages/task-list/task-list';

//Directive
import { EqualValidator } from "./common/directive/equal-validator.directive";

//Component
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component'

@NgModule({
  declarations: [
    AppComponent,
    SimpleLayoutPage,
    TaskList,
    EqualValidator,
    TableComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    MdPaginatorModule,
    MdSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
