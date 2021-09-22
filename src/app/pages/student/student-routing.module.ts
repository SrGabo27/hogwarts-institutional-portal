import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pages.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListNewStudentsComponent } from './list-new-students/list-new-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'students',
        component: ListStudentsComponent,
        data: { title: 'Students list' },
      },
      {
        path: 'new-students-application',
        component: ListNewStudentsComponent,
        data: { title: 'New Students Application List' },
      },
      {
        path: 'new-student',
        component: CreateStudentComponent,
        data: { title: 'New Student Application' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
