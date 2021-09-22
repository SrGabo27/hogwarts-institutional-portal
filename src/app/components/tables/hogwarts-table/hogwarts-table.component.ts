import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Student } from 'src/app/models/student';
import { Tag } from 'src/app/models/tag';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-hogwarts-table',
  templateUrl: './hogwarts-table.component.html',
  styleUrls: ['./hogwarts-table.component.sass'],
})
export class HogwartsTableComponent implements OnInit {
  /**
   * The elements to display
   */
  @Input() elements: Array<Teacher | Student | Character> = [];

  /**
   * Hides the table and shows an spinner instead
   */
  @Input() isLoading: boolean = false;

  public searchInput: string = '';
  public selectedTag: string = 'Name';

  public tags: Array<Tag> = [
    {
      name: 'Name',
      selected: true,
    },
    {
      name: 'Patronus',
      selected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public search(value: string): void {
    this.searchInput = value;
  }

  public selectTag(tagName: string): void {
    this.selectedTag = tagName;
  }

  public sortByColumn(column: 'name' | 'patronus') {
    if (column === 'name')
      this.elements.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    if (column === 'patronus')
      this.elements.sort((a, b) => {
        if (a.patronus < b.patronus) return -1;
        if (a.patronus > b.patronus) return 1;
        return 0;
      });
  }
}
