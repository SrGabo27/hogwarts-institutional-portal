import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.sass'],
})
export class SearchTableComponent implements OnInit {
  /**
   * Tags to display and select
   */
  @Input() tags: Array<Tag> = [];

  /**
   * Return the selected tag name
   */
  @Output() selectedTag = new EventEmitter<string>();

  /**
   * Returns the search input value on keyup event
   */
  @Output() searchString = new EventEmitter<string>();

  public searchInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  public selectTag(tag: Tag): void {
    tag.selected = true;

    this.tags.forEach((arrayTag) => {
      if (arrayTag.name !== tag.name) arrayTag.selected = false;
    });

    this.selectedTag.emit(tag.name);
  }

  public search(): void {
    this.searchString.emit(this.searchInput);
  }
}
