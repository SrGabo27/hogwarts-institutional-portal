import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  get menu(): Array<Menu> {
    return this.menuService.menu;
  }

  ngOnInit(): void {}
}
