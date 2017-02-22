import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'bug-edit',
	template : `
		 <section class="edit">
		 	<label for="">New Bug :</label>
		 	<input type="text" [(ngModel)]="newBugName">
		 	<input type="button" value="Save" (click)="onSaveClick(newBugName)">
		 </section>
	`
})
export class BugEditComponent{

	@Output()
	onNewBug : EventEmitter<string> = new EventEmitter<string>();

	onSaveClick(newBugName : string){
		this.onNewBug.emit(newBugName);
	}
}