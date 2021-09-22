import { Injectable } from '@angular/core';
import { House } from 'src/app/models/house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  public houses: Array<House> = [
    {
      name: 'Gryffindor',
      shieldImg: '/assets/img/gryffindor-logo.png',
      description: 'Example',
    },
    {
      name: 'Hufflepuff',
      shieldImg: '/assets/img/hufflepuff-logo.png',
      description: 'Example',
    },
    {
      name: 'Ravenclaw',
      shieldImg: '/assets/img/ravenclaw-logo.png',
      description: 'Example',
    },
    {
      name: 'Slytherin',
      shieldImg: '/assets/img/slytherin-logo.png',
      description: 'Example',
    },
  ];

  constructor() {}
}
