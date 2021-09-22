import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from 'src/app/models/character';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house/house.service';
import { CharacterService } from 'src/app/services/services';

@Component({
	selector: 'app-list-characters',
	templateUrl: './list-characters.component.html',
	styleUrls: ['./list-characters.component.sass'],
})
export class ListCharactersComponent implements OnInit {
	public characters: Array<Character> = [];
	public houseSelect: FormControl;

	public loading: boolean = false;

	constructor(
		private characterService: CharacterService,
		private houseService: HouseService
	) {
		this.houseSelect = new FormControl('');
		this.selectHouse();
	}

	get houses(): Array<House> {
		return this.houseService.houses;
	}

	ngOnInit(): void { }

	private getCharacters(houseName: string): void {
		this.loading = true;
		this.characterService
			.getCharacters(houseName)
			.subscribe(
				(characters) => ((this.characters = characters), (this.loading = false))
			);
	}

	private selectHouse(): void {
		this.houseSelect.valueChanges.subscribe((house) => {
			this.getCharacters(house);
		});
	}
}
