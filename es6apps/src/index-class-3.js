class Employee {
    //declare variable
    id
    name
    //constructor 
    constructor(id = 0, name = 'name') {
        //initalize the variable
        this.id = id
        this.name = name
    }
    //methods
    calculateSalary() {
        return 100
    }
    calculateLeave = () => {
        return 10
    }
}

//let is keyword
//emp is just variable called reference variables
//new is memory allocation operator
//Employee() is constructor call
let emp = new Employee(1, 'Subramanian')
console.log(emp.id, emp.name, emp.calculateSalary())
console.log(emp.calculateLeave())

emp = new Employee()
console.log(emp.id, emp.name, emp.calculateSalary())
console.log(emp.calculateLeave())