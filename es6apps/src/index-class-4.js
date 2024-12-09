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

let emp = new Employee(1, 'Subramanian')
console.log(emp.id, emp.name, emp.calculateSalary())
console.log(emp.calculateLeave())

emp = new Employee()
console.log(emp.id, emp.name, emp.calculateSalary())
console.log(emp.calculateLeave())

emp = new Employee()
//state initalization
emp.id = 1000
emp.name = 'Ram'
console.log(emp.id, emp.name, emp.calculateSalary())
console.log(emp.calculateLeave())