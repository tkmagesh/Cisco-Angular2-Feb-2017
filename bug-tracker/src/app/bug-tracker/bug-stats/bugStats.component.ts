import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
		 	<span class="closed">{{ data | closedcount }}</span>
		 	<span> / </span>
		 	<span>{{data.length}}</span>
		 </section>
	`,
	styleUrls : ['bugStats.style.css']
})
export class BugStatsComponent{

	@Input()
	data : Array<IBug> = [];
}