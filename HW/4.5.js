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