import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pages.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'characters',
        component: ListCharactersComponent,
        data: { title: 'Characters List' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
