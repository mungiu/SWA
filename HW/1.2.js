// implementing class model using factory functions

// factory method which takes point.radius or x.y.radius and creates a circle
function Circle(p1, p2, p3) {
  let circle = {};

  // getters written in two different ways
  circle.getCenter = () => { return center };
  circle.getRadius = () => { return radius };

  // checking if 
  if (typeof p3 !== "undefined") {
    //// creating an object that will hold desired parameters
    // let params = {center:Point(p1, p2), radius:p3};
    circle.center = Point(p1, p2);
    circle.radius = p3;
    //// p1 = x | p2 = y | p3 = radius
    // circle = Object.assign(params);
  }
  else {
    //// creating an object that will hold desired parameters
    // let params = {center:p1, radius:p2};
    circle.center = p1
    circle.radius = p2
    //// p1 = point | p2 = radius
    // circle = Object.assign(params);
  }

  circle.moveTo = (_x, _y) => {
    circle.center.x = _x
    circle.center.y = _y
  };

  circle.toString = () => { return 'center: ' + center.toString + ' radius: ' + radius };

  // {
  //   console.log("radius:" + circle.radius + " x:" + point.x + " y:" + point.y);
  // }

  return circle;
};

//factory method that creates a point from two coordinates X and Y
const Point = function (_x, _y) {
  let a = { x: _x, y: _y };

  a.getX = () => { return a.x };
  a.getY = () => { return a.y };

  a.moveTo = (_x, _y) => {
    a.x = _x
    a.y = _y
  };

  // point.print = function() {
  //   console.log(" x: " + x + "y: " + y);
  // };

  // point.copy = function() {
  //   // creating a deep copy of the object, so that when its values change, the original object remains intact
  //   // thsi is done so because primitive type are indeed copied, while object types are passed by reference, unless the below deep copying method is used
  //   let copiedPoint = JSON.parse(JSON.stringify(point));

  //   return copiedPoint;
  // };

  a.toString = () => { return 'x: ' + a.x + ' y: ' + a.y; }
  a.copy = () => { return Point(a.x, a.y) };

  const newPoint = Object.assign({}, a);

  return newPoint;
}

let pp = Point(100, 100);
console.log(pp.toString());
pp.moveTo(10, 10);
console.log(pp.toString());


// testing
const circles = [
  [0, Circle(Point('1', '2'), '10')],
  [1, Circle('1', '2', '10')],
  [2, Circle('1', '2', '20')],
  [3, Circle('3', '4', '30')],
  [4, Circle('5', '6', '40')]
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