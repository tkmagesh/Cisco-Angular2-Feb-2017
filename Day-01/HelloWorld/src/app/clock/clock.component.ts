import { Component } from '@angular/core';
@Component({
	selector : 'clock',
	template : `
	<div>
		<small>
			<i>{{currentTime}}</i>
		</small>
		<input type="button" value="Refresh" (click)="updateTime()">
	</div>
	`
})
export class ClockComponent{
	currentTime :string = Date();

	constructor(){
		//setInterval( () => this.currentTime = Date(), 1000);
	}

	updateTime(){
		this.currentTime = Date();
	}
}