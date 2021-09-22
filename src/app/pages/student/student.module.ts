import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {
	AppFormsModule,
	TablesModule,
} from 'src/app/components/app-components';
import { ListStudentsComponent } from './list-students/list-students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { NgxIziToastModule } from 'ngx-izitoast';
import { ListNewStudentsComponent } from './list-new-students/list-new-students.component';

@NgModule({
	declarations: [ListStudentsComponent, CreateStudentComponent, ListNewStudentsComponent],
	imports: [
		CommonModule,
		StudentRoutingModule,
		TablesModule,
		AppFormsModule,
		NgxIziToastModule,
	],
})
export class StudentModule { }
