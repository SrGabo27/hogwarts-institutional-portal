import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pages.component';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'teachers',
        component: ListTeachersComponent,
        data: { title: 'Teachers list' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
