import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// ------ Routing
import { PagesRoutingModule } from './pages-routing.module';

// ------ Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CharacterModule } from './character/character.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CharacterModule,
    StudentModule,
    TeacherModule,
  ],
})
export class PagesModule {}
