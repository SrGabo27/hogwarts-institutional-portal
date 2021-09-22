import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { TablesModule } from 'src/app/components/app-components';

@NgModule({
  declarations: [ListTeachersComponent],
  imports: [CommonModule, TeacherRoutingModule, TablesModule],
})
export class TeacherModule {}
