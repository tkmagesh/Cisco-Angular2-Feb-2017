import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './services/BugOperations.service';


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

	//bugOperations : BugOperations = new BugOperations();

	constructor(public bugOperations : BugOperations){

	}

	onSaveClick(){
		var newBug : IBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = this.bugs.concat([newBug]);
	}

	onBugClick(bug){
		this.bugs = this.bugs.map(b => 
			(b === bug) ? this.bugOperations.toggle(b) : b
		);
	}

	
	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}


