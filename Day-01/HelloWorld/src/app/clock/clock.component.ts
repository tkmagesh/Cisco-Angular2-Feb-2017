import { Component } from '@angular/core';
@Component({
	selector : 'clock',
	template : '<div><small><i>{{currentTime}}</i></small></div>'
})
export class ClockComponent{
	currentTime :string = Date();
	constructor(){
		setInterval( () => this.currentTime = Date(), 1000);
	}
}