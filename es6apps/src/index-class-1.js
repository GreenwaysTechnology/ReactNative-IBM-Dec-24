class Employee {
    //state and methods
    id = 1
    name = 'Subramanian'

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
let emp = new Employee()
console.log(emp.id,emp.name,emp.calculateSalary())
console.log(emp.calculateLeave())