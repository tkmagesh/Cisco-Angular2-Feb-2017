import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorage } from './services/BugStorage.service';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

declare var fetch;

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
		 <bug-edit (onNewBug)="onNewBugEvent($event)"></bug-edit>
		 <section class="list">
		 	<ol>
		 		<bug-item  
		 			*ngFor="let bug of bugsAsync | async" 
		 			[data]="bug" 
		 			(itemClick)="onBugClick($event)"
		 		></bug-item>
		 	</ol>
		 	<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		 </section>
	`
})
export class BugTrackerComponent implements OnInit{
	bugs : Array<IBug> = [];
	newBugName : string = '';

	bugsAsync : any;

	ngOnInit(){
		/*this.bugsAsync = fetch('http://localhost:3000/bugs')
		  						.then(response => response.json())
		  						.then(bugs => {
		  							this.bugs = bugs;
		  							return bugs;
		  						});*/

		this.bugsAsync = 
			this.http.get('http://localhost:3000/bugs')
				.map(response => response.json());


			
	
		 

	}

	constructor(public bugStorage : BugStorage, private http : Http){
		//this.bugs = this.bugStorage.getAll();
		
	}
	onNewBugEvent(bugName : string){
		var newBug = this.bugStorage.addNew(bugName);
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


