import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorage } from './services/BugStorage.service';



@Component({
	selector : 'bug-tracker',
	styleUrls : ['bugTracker.style.css'],
	template : `
		 <bug-stats [data]="bugs"></bug-stats>
		 <section class="sort">
		 	<label for="">Order By :</label>
		 	<select [(ngModel)]="sortBug">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
		 	</select>
		 	<label for="">Descending ? :</label>
		 	<input type="checkbox" [(ngModel)]="sortByDescending">
		 </section>
		 <section class="edit">
		 	<label for="">New Bug :</label>
		 	<input type="text" [(ngModel)]="newBugName">
		 	<input type="button" value="Save" (click)="onSaveClick()">
		 </section>
		 <section class="list">
		 	<ol>
		 		<li *ngFor="let bug of bugs | sort:sortBug:sortByDescending">
		 			<span [ngClass]="{closed : bug.isClosed}" (click)="onBugClick(bug)" class="bugname">
		 				{{ bug.name | trimtext:40 }}
		 			</span>
		 			
		 			<div class="datetime">[Created At]</div>
		 		</li>
		 	</ol>
		 	<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		 </section>
	`
})
export class BugTrackerComponent{
	bugs : Array<IBug> = [];
	newBugName : string = '';

	

	constructor(public bugStorage : BugStorage){
		this.bugs = this.bugStorage.getAll();
	}

	onSaveClick(){
		var newBug : IBug = this.bugStorage.addNew(this.newBugName);
		this.bugs = this.bugs.concat([newBug]);
	}

	onBugClick(bug){
		this.bugs = this.bugs.map(b => 
			(b === bug) ? this.bugStorage.toggle(b) : b
		);
	}

	
	onRemoveClosedClick(){
		var bugsToBeRemoved = this.bugs.filter(bug => bug.isClosed);
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
		bugsToBeRemoved.forEach(bug => this.bugStorage.remove(bug));

	}
}


