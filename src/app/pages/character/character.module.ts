import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { TablesModule } from 'src/app/components/app-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListCharactersComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    TablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CharacterModule {}
