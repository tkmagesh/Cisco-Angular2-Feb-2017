import {Component} from '@angular/core';
import {SalaryCalculator} from '../models/SalaryCalculator';

@Component({
	template : `
	<div class="content">
		<div class="field">
			<label for="">Basic :</label>
			<input type="number" [(ngModel)]="calculator.basic">
		</div>
		<div class="field">
			<label for="">HRA :</label>
			<input type="number" [(ngModel)]="calculator.hra">
		</div>
		<div class="field">
			<label for="">DA :</label>
			<input type="number" [(ngModel)]="calculator.da">
		</div>
		<div class="field">
			<label for="">Tax :</label>
			<input type="range" [(ngModel)]="calculator.tax" min="0" max="30">
			<span id="spanTax">{{calculator.tax}}</span>
		</div>
		<div class="field">
			<input type="button" value="Calculate" (click)="calculator.calculate()">
		</div>
		<div class="field" id="divResult">{{calculator.salary}}</div>
	</div>
	`,
	selector : 'salary-calculator'
})
export class SalaryCalculatorComponent{	
	calculator : SalaryCalculator = new SalaryCalculator();
}















