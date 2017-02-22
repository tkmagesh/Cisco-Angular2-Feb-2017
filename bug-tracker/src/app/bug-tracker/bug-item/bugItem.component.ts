import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-item',
	template : `
		<li>
 			<span [ngClass]="{closed : data.isClosed}" (click)="onNameClick(data)" class="bugname">
 				{{ data.name | trimtext:40 }}
 			</span>
 			
 			<div class="datetime">{{data.createdAt | elapsed}}</div>
 		</li>
	`,
	styleUrls : ['bugItem.style.css']
})
export class BugItemComponent{

	@Input()
	data : IBug;

	@Output()
	itemClick : EventEmitter<IBug> = new EventEmitter<IBug>();

	onNameClick(bug : IBug){
		this.itemClick.emit(bug);
	}

}