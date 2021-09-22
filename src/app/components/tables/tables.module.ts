import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPipesModule } from 'src/app/pipes/app-pipes.module';
import { HogwartsTableComponent } from './hogwarts-table/hogwarts-table.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { SearchTableComponent } from './search-table/search-table.component';

/**
 * Exports all the tables of the app
 */
@NgModule({
  declarations: [HogwartsTableComponent, SearchTableComponent],
  imports: [
    CommonModule,
    AppPipesModule,
    UiModule,
    FormsModule,
    MatChipsModule,
  ],
  exports: [HogwartsTableComponent],
})
export class TablesModule {}
