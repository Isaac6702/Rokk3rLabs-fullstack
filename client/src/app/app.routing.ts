import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { TaskList } from './pages/task-list/task-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayoutPage,
    children: [
      {
        path: 'task-list',
        component: TaskList
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
