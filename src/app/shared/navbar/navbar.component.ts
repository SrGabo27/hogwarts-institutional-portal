import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  public bannerTitle!: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService
  ) {
    this.getRouteData();
  }

  get menu(): Array<Menu> {
    return this.menuService.menu;
  }

  ngOnInit(): void {
    this.toggleNavbar();
  }

  /**
   * Gets the custom data from the route and dynamically set the banner title
   */
  private getRouteData(): void {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        const title = this.activatedRoute.snapshot.firstChild?.data.title;
        this.bannerTitle = title;
      }
    });
  }

  private toggleNavbar() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target?.classList.toggle('is-active');
          });
        });
      }
    });
  }
}
