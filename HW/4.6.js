const personsSalaries = [
    { age: 30, salary: 30 },
    { age: 1, salary: 30 },
    { age: 1, salary: 30 },
    { age: 1, salary: 30 }
]
const sum = []

const reduce = function (iterable, reduceFn, accumulator) {
    for (let i of iterable) {
        accumulator = reduceFn(accumulator, i)
    }
    return accumulator
}

const map1 = (a, f) => reduce(a, (arr, v) => [...arr, f(v)], [])
const filter1 = (a, p) => reduce(a, (arr, v) => p(v) ? [...arr, p(v)] : arr, [])

// extracting all salaries
console.log(map1(personsSalaries, (v) => v.salary)) 
// extracting all salaries of people with age above 2
console.log(filter1(personsSalaries, (v) => (v.age >= 2) ? v.salary : null)) 