// a
const power = a => b => Math.pow(a, b);
console.log(power(3)(2));

// b first example
var fibonacci_series = function (n) {
    if (n === 1) {
        return [0, 1];
    }
    else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};
console.log(fibonacci_series(10));


var fibonacci = (function () {
    var arr = [0, 1];
    return function () {
        var num = arr[arr.length - 1],
            len = arr.length;
        arr.push(arr[len - 1] + arr[len - 2]);
        return num;
    };
}());

// b second example
const fibonacci_series2 = i => {
    var s;
    for (i = 0; i < 10; i++) {
        s += ' ' + fibonacci();
    }
    return s;
}
console.log(fibonacci_series2(10));
