import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass'],
})
export class SpinnerComponent implements OnInit {
  /**
   * Shows the spinner whe its true or close it when is set to false
   */
  @Input() show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
