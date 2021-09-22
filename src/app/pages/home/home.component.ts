import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private houseService: HouseService) {}

  get houses(): Array<House> {
    return this.houseService.houses;
  }

  ngOnInit(): void {}
}
