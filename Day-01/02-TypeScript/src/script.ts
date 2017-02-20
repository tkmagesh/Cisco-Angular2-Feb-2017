/*class SalaryCalculator{
	public basic : number = 0;
	public hra : number = 0;
	public da : number = 0;
	public tax : number = 0;
	public salary : number = 0;

	calculate(){
		var gross = this.basic + this.hra + this.da;
		var net = gross * ((100-this.tax)/100);
		this.salary = net;
	}
}*/

class Events{
	_eventListeners = {};

	onChange(attrName : string, fn : Function) : void{
		this._eventListeners[attrName] = this._eventListeners[attrName] || [];
		this._eventListeners[attrName].push(fn);
	}
	trigger(attrName : string){
		var eventListeners = this._eventListeners[attrName] || [];
		for(var i=0; i < eventListeners.length; i++)
			eventListeners[i]();
	}
}

interface ICalculatorData{
	basic : number,
	hra : number, 
	da : number,
	tax : number,
	salary : number
};

class SalaryCalculator extends Events{
	_data : ICalculatorData = {
		basic : 0,
		hra : 0,
		da : 0,
		tax : 0,
		salary : 0
	};

	get(attrName : string) : any {
		return this._data[attrName];
	}
	set(attrName : string, value : any) : void{
		if (this._data[attrName] === value) return;
		this._data[attrName] = value;
		this.trigger(attrName);
	}
}