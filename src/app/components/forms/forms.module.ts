import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';

/**
 * Exports all the forms of the app
 */
@NgModule({
  declarations: [StudentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
  ],
  exports: [StudentFormComponent],
})
export class AppFormsModule {}
