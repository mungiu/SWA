const add = n => m => {
    return n + m
};
//console.log(add(1)(2));

const greater = n => m => {
    return n > m
};
//console.log(greater(1)(2));

var arr = [1,2,3];
const get = attr => o => {
    return o[attr]
};
//console.log(get(1)(arr));
// NOTE: X is the first passed in variable after 2 methods
const pipe = f => g => {
    return function (x, y) {
        let r = f(x)(y)         // selecting from array y at index x
        return g(r)(1)          // checking if above selection is greater then "1"
    }
};
console.log(pipe(get)(greater)(1, arr));



///////////////////////// SECOND PART ////////////////////////////////////




const persons = [
    { name: 'andrei', age: 1, salary: 30 },
    { name: 'bob', age: 2, salary: 30 },
    { name: 'celio', age: 3, salary: 30 },
    { name: 'dai', age: 19, salary: 30 },
]
const persNameArr = []

const names = persons => arr =>{
    for (let p of persons) {
        arr.push(p.name) // p => p.name
    }
}
console.log('LAST PART')
console.log(persNameArr)
names(persons)(persNameArr);
console.log(persNameArr)

const oldPersArr = []
const extractOldPersons = persons => arr => {
    for (let p of persons) {
        if (p.age >= 4) // p => p.age >= 2
            arr.push(p)
    }
}
console.log('')
console.log(oldPersArr)
extractOldPersons(persons)(oldPersArr);
console.log(oldPersArr)

const totalSalariesOfOldPersons = persons => {
    let sum = 0;
    for (let p of persons) {
        if (p.age >= 4) // p => p.age >= 2
            sum += p.salary;
    }
    return sum;
}
console.log('')
console.log('sum of old ppl salary is: ' + totalSalariesOfOldPersons(persons));