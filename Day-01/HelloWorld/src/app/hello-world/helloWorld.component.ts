import { Component } from '@angular/core';

@Component({
	selector : 'hello-world',
	template : `
	<label>Name :</label>
	<input type="text" #txtName>
	<input type="button" value="Greet" (click)="onGreetClick(txtName.value)">
	<h2>{{message}}</h2>
	`
})
export class HelloWorldComponent{
	message : string = '';

	onGreetClick(name){
		
		this.message = 'Hi ' + name + ', Welcome to the world of Angular2!';
	}
}