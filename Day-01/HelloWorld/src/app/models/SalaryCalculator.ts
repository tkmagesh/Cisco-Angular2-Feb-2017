export class SalaryCalculator{
	basic : number = 10000;
	hra : number = 0;
	da : number = 0;
	tax : number = 0;
	salary : number = 0;


	calculate(){
		var gross = this.basic + this.hra + this.da;
		var net = gross * ((100-this.tax)/100);
		this.salary = net;
	}
}
