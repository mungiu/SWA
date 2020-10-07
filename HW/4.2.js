class ImmutableCircle {
    constructor(p1, p2, p3) {
        if (typeof p3 !== "undefined") {
            this.center = new ImmutablePoint(p1, p2);
            this.radius = p3;
        }
        else {
            this.center = p1;
            this.radius = p2;
        }
    }

    moveTo(_x, _y) {
        return new ImmutableCircle(center.moveTo(_x, _y), this.radius);
    }

    toString() {
        return 'center: ' + this.center.toString + ' radius: ' + this.radius
    }
}

class ImmutablePoint {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    moveTo(_x, _y) {
        return new ImmutablePoint(_x, _y);
    }

    toString() { return 'x: ' + this.x + ' y: ' + this.y }
    copy() { return new ImmutablePoint(this.x, this.y) }
}

let pp = new ImmutablePoint(100, 100);
console.log(pp.toString());
let pp1 = pp.moveTo(10, 10);
console.log(pp.toString());
console.log(pp1.toString());


// testing
const circles = [
    [0, new ImmutableCircle(new ImmutablePoint('1', '2'), '10')],
    [1, new ImmutableCircle('1', '2', '10')],
    [2, new ImmutableCircle('1', '2', '20')],
    [3, new ImmutableCircle('3', '4', '30')],
    [4, new ImmutableCircle('5', '6', '40')]
];
let msg1 = '';
let msg2 = '';

//NOTE map can only be used on arrays
var circleRadiuses = circles.map(function (item) { return item[1]['radius']; }
);
var circleCentersX = circles.map(function (item) {
    { return item[1]['center']; }
})

// collecting the results into a string
for (let i = 0; i < circles.length; i++) {

    if (circles[i]) {
        msg1 = msg1 + circleRadiuses[i]
        msg2 = msg2 + circleCentersX[i].getX()
    }
    else {
        msg1 = msg1 + '  '
        msg2 = msg2 + '  '
    };
};

//printing out the resultant strings
console.log(msg1);
console.log(msg2);