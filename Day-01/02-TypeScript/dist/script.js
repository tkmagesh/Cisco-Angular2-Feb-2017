function add(x, y) {
    return x + y;
}
//add("100", "abc");
var Employee = (function () {
    //id : number = 0;
    function Employee(id) {
        this.id = id;
        //this.id = id;
    }
    Employee.prototype.display = function () {
        console.log(this.id);
    };
    return Employee;
}());
var emp = new Employee(100);
console.log(emp.id);
