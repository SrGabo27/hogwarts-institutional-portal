import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

/**
 * Exports al the app ui components
 */
@NgModule({
	declarations: [SpinnerComponent],
	imports: [CommonModule],
	exports: [SpinnerComponent],
})
export class UiModule { }
