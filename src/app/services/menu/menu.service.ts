import { Injectable } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menu: Array<Menu> = [
    {
      title: 'Characters',
      children: [
        {
          title: 'Characters list',
          link: '/characters',
        },
      ],
    },
    {
      title: 'Students',
      children: [
        {
          title: 'Students list',
          link: '/students',
        },
        {
          title: 'New student application',
          link: '/new-student',
        },
        {
          title: 'New students application list',
          link: '/new-students-application',
        },
      ],
    },
    {
      title: 'Teachers',
      children: [
        {
          title: 'Teachers list',
          link: '/teachers',
        },
      ],
    },
  ];

  constructor() {}
}
