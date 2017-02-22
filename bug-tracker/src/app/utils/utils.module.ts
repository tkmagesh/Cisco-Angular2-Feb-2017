import { NgModule } from '@angular/core';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
	declarations : [
		TrimTextPipe,
		SortPipe
	],
	exports : [
		TrimTextPipe,
		SortPipe
	]
})
export class UtilsModule{

}