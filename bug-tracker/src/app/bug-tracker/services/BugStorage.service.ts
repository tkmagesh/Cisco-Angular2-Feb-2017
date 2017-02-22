import { Injectable } from '@angular/core';
import { BugOperations } from './BugOperations.service';
import { IBug } from '../models/IBug';

@Injectable()
export class BugStorage{
	private currentBugId = 0;
	private storage : any = window.localStorage;

	constructor(private bugOperations : BugOperations){

	}
	addNew(bugName : string) : IBug{
		var newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.saveBug(newBug);
		return newBug;
	}

	private saveBug(bug : IBug){
		this.storage.setItem(bug.id, JSON.stringify(bug));
	}

	toggle(bug : IBug) : IBug {
		var toggledBug = this.bugOperations.toggle(bug);
		this.saveBug(toggledBug);
		return toggledBug;
	}

	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id);
	}

	getAll() : Array<IBug>{
		var result : Array<IBug> = [];
		for(var i=0; i < this.storage.length; i++){
			var key = this.storage.key(i);
			var dataAsString = this.storage.getItem(key);
			var bug = JSON.parse(dataAsString);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
}