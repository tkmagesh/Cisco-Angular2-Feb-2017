import { Component } from '@angular/core';

@Component({
	selector : 'hello-world',
	template : '<h2>{{message}}</h2>'
})
export class HelloWorldComponent{
	message : string = 'Welcome to the world of Angular2!'
}