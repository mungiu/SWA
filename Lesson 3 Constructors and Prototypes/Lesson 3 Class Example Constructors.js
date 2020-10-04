//Constructors + prototypes
function Adding(a,b){
    this.a=a
    this.b=b
    // this.add = function() { return this.a + this.b} //
}

y = new Adding(200, -15)
console.log(y) // Adding {a:200, b:-50}
console.log(y.constructor) // [Function : Adding]

Adding.prototype = {
    add() {return this.a + this.b}
}

console.log(y.constructor === Adding) // FALSE
console.log(y instanceof Adding) // TRUE
console.log(y.add()) // 
console.log(Object.getPrototypeOf(y) === Adding.prototype)
console.log(Adding.getPrototypeOf(y) !== Object.getPrototypeOf(Adding))

//// Employee extends Person
function Person(name, address){
    this.name = name
    this.address = address
}

Person.prototype = {
    toString() {return 'name: ${this.name}, address: ${this.address}'}
}

let p = new Person('Donald Duck', 'Duckville')
// NOTE: the way you call a function decided what is in the functions context
// this is why 'name' suddenly get the "name" value from the "Person" objct
console.log(p.toString()) // name: Donald Duck, address: Ducksville

////
function Employee(name, address, salary){
    // calling super
    Person.call(this, name, address) // To make sure this is bound in the call to Person
    this.salary = salary
}

Employee.prototype = {
    getAnnualSalary() {return 12 * this.salary}
}

Object.setPrototypeOf(Employee.prototype, Person.prototype)

let e = new Employee('Donald Duck', 'Ducksville', 2000) // this is the new object in the call
console.log(e.getAnnualSalary()) // 240000 this will be E in the call
console.log(e.toString()) // name: undefined, address: undefined
console.log(e) // {salary : 20000}
console.log(name) // Donald Duck


// NOTE this is much easier 
// and preferred to the above implementation of constructors and prototypes
class Person{
    constructor(name, address){
        this.name=name
        this.address=address
    }
    toString() {return 'name: ${this.name}, address: ${this.address}'}
}

let p = new Person('DOnald Duck', 'Ducksville')
console.log(p.toString())

class Employee extends Person{
    constructor(name, address, salary){
        super(name, address)
        this.salary = salary
    }

    getAnnualSalary(){return 12*this.salary}
}

let e = new Employee('Donald Duck', 'Ducksville', 2000) // this is the new object in the call
console.log() // 240000 this will be E in the call
console.log(e.getAnnualSalary()) // 240000 this will be E in the call
console.log(e.toString()) // name: undefined, address: undefined
console.log(e) // {salary : 20000}
console.log(name) // Donald Duck ??
console.log(typeof Person) // function
console.log(Person.prototype.toString) // [Function: toString]
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype) // TRUE

let f = e.getAnnualSalary
console.log(f.call())