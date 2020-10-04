//Rewrite the following functions using map, filter and reduce.
const persons = [
    { name: 'andrei', age: 1 },
    { name: 'bob', age: 2 },
    { name: 'celio', age: 3 },
    { name: 'dai', age: 19 },
]

const names = persons => {
    let arr = []
    for (let p of persons) {
        arr.push(p.name) // p => p.name
    }
    return arr
}

const ages = persons => {
    let arr = []
    for (let p of persons) {
        arr.push(p.age) // p => p.type
    }
    return arr
}
console.log("TWO ARRAYS OF DATA COLLECTED OLD SCHOOL WAY")
console.log(names(persons))
console.log(ages(persons))

const map = (a, f) => {
    let acc = []
    for (let p of a) {
        acc.push(f(p))
    }
    return acc
}
console.log("SAME DONE WITH MAP")
console.log(map(persons, p => p.name))
console.log(map(persons, p => p.age))

const extractOldPersons = persons => {
    let arr = []
    for (let p of persons) {
        if (p.age >= 2) // p => p.age >= 2
            arr.push(p)
    }
    return arr
}
const oldestPerson = persons => {
    let oldest = null
    for (let p of persons) {
        if (!oldest || p.age > oldest.age) // p => !oldest || p.age > oldest.age
            oldest = p
    }
    return oldest
}
console.log("PRIMITIVE HARDCODED FITERING")
console.log(extractOldPersons(persons))
console.log("Oldest person is: " + oldestPerson(persons).name)

const filter = (dataArr, predicate) => {
    let arr = []
    for (let p of dataArr) {
        if (predicate(p)) // p => p.age >= 2
            arr.push(p)
    }
    return arr
}

const filter1 = () => { }
console.log("MODERN FITERING WITH PREDICATE")
console.log(filter(persons, p => p.age >= 2))
// console.log(filter(persons, p => p.age >= 2))

/**
 * A method that applies a specific function ot an arra repeatedly, it generates only 1 output variable
 * @param {*} dataArr 
 * @param {*} func the function to be called repeatedly on each element of "dataArr"
 * @param {*} init_value the initial value o start off with
 */
const reduce = (dataArr, func, init_value) => {
    let arr = init_value
    for (let data of dataArr) {
        arr = func(arr, data)
    }
    return arr
}

console.log()
console.log(persons.map(p => p.age))                        // [ 1, 2, 3, 4 ]
console.log(persons.filter(p => p.age >= 2))                // [ { name: 'b', age: 2 }, ...{}]
console.log("The oldest person is: " + persons.reduce(      // NOTE: this reduce is JavaScript pre-defined
    (prev, current) => (prev.y > current.y) ? prev : current).name)  // p => !oldest || p.age > oldest.age


//// EXAMPLES FROM TEACHER ////
const map1 = (a, f) => reduce(a, (arr, v) => [...arr, f(v)], [])
const filter1 = (a, p) => reduce(a, (arr, v) => p(v) ? [...arr, v] : arr, [])
//
console.log(reduce([1, 2, 3, 4], (arr, v) => arr + v, 0))   // 10 = 1 + 2 + 3 + 4
console.log(reduce([1, 2, 3, 4], (arr, v) => arr * v, 1))   // 24 = 1 * 2 * 3 * 4
// SAME AS ABOVE WITH SLITELY DIFFERENT SYNTAX
console.log([1, 2, 3, 4].reduce((arr, v) => arr + v, 0))    // 10 = 1 + 2 + 3 + 4
console.log([1, 2, 3, 4].reduce((arr, v) => arr * v, 1))    // 24 = 1 * 2 * 3 * 4
//// EXAMPLES FROM TEACHER ////