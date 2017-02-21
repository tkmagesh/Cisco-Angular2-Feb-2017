import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	styleUrls : ['bugTracker.style.css'],
	template : `
		<section class="stats">
		 	<span class="closed">{{getClosedCount()}} </span>
		 	<span> / </span>
		 	<span>{{bugs.length}}</span>
		 </section>
		 <section class="sort">
		 	<label for="">Order By :</label>
		 	<input type="text" name="" id="">
		 	<label for="">Descending ? :</label>
		 	<input type="checkbox" name="" id="">
		 </section>
		 <section class="edit">
		 	<label for="">New Bug :</label>
		 	<input type="text" #txtBugName>
		 	<input type="button" value="Save" (click)="onSaveClick(txtBugName.value)">
		 </section>
		 <section class="list">
		 	<ol>
		 		<li *ngFor="let bug of bugs">
		 			<span [ngClass]="{closed : bug.isClosed}" (click)="onBugClick(bug)" class="bugname">
		 				{{bug.name | trimtext}}
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

	onSaveClick(bugName : string){
		var newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	getClosedCount(){
		var result = 0;
		for(var i=0; i < this.bugs.length; i++)
			if (this.bugs[i].isClosed)
				++result;
		return result;
	}

	onRemoveClosedClick(){
		for(var i=this.bugs.length-1; i >= 0; i--){
			if (this.bugs[i].isClosed)
				this.bugs.splice(i,1);
		}
	}
}


