//create an empty array named "employees"
var employees = [] 

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`
function Employee (name, title, salary, status) {
    this.name = name 
    this.title = title
    this.salary = salary
    this.status = "Full Time"
}

this.printEmployeeForm = function () {
    console.log(this) 
}


//1. Instantiate three employees
//2. Override the status attribute of one of them to either "Part Time" or "Contract"
//3. Call the `printEmployeeForm` method for each employee

var emp1 = new Employee ("Goku", "CEO", "7000/week")

var emp2 = new Employee ("Gohan", "CFO", "7200/week")

var emp3 = new Employee ("Goten", "Media Rep", "7500/week")
emp3.status = "Contract"



//4. Put the generated employees into the `employees` array using whichever method you prefer 
employees.push(emp1, emp2, emp3)


console.log(employees)



