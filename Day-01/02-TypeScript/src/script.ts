function add(x:number, y:number):number{
	return x + y;
}

//add("100", "abc");

class Employee{
	//id : number = 0;

	constructor(private id:number){
		//this.id = id;
	}
	display(){
		console.log(this.id);
	}
}

var emp : Employee = new Employee(100);
console.log(emp.id);