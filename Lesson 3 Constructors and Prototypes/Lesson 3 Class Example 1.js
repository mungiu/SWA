let y = {a:100, b:'woof'}
// y is the protorype of x
let x = Object.create(y)


////    NOTE: the above is an Object inheritance because:
//      You can access all attributes of y from - unless overwritten
//      x is not a copy of y, but refers to y
console.log(x.a) // 100
console.log(Object.getPrototypeOf(x) === y) //TRUE
//      x.a "x doesn't have an a, so let's look up in the prototype"
//      x.a = 200 "x has an a, nevermind the prototype"

let z = {}
Object.setPrototypeOf(z,y)
console.log(z.a) // 100

y.a = 200
console.log(x.a)
console.log()
x.a = 300
console.log(x.a) // 300
console.log(y.a) // 200
console.log(z.a) // 200