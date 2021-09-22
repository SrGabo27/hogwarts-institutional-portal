import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './age/age.pipe';
import { FilterTablePipe } from './filter-table/filter-table.pipe';

@NgModule({
  declarations: [AgePipe, FilterTablePipe],
  imports: [CommonModule],
  exports: [AgePipe, FilterTablePipe],
})
export class AppPipesModule {}
