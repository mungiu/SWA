"use strict";

// const unsubscribeButton = document.querySelector('button')
var textField = document.querySelector('input');
var date = document.getElementById("date");
var ul = document.querySelector('ul');
var listItems = ul.getElementsByTagName('li');
var subscribeToggle = document.getElementById('subscribeToggle');
var severity = 0;
var accumulatedWarningsArray = []; ////////////////////////    EX 10.1
// const getText = () => {
//     return textField.value
// }
// const log = (input) => {
//     console.log(input);
//     return input
// }
// const selectOdd = (input) => {
//     if (input % 2)
//         return input;
// }
// rxjs.fromEvent(button, 'click')
//     .pipe( // the pipe is treversed in order without skips
//         rxjs.operators.throttleTime(1000), // ensures the event is processed only every 1000 ms
//         rxjs.operators.map(getText),
//         rxjs.operators.map(log),
//         rxjs.operators.filter(selectOdd),
//         rxjs.operators.scan((count, input) => count + parseInt(input), 0) // NOTE: 0 is the initial value
//     )
//     .subscribe((x) => {
//         paragraph.textContent = x
//         console.log("Accumulated odd numbers are:", x)
//     })
/////////////////////////     ASSIGNMENT

var addBullet = function addBullet(text) {
  var li = document.createElement('li');
  li.innerText = text;
  ul.appendChild(li);
};

var isANewID = function isANewID(id) {
  for (var i = 0; i <= accumulatedWarningsArray.length - 1; i++) {
    if (accumulatedWarningsArray[i].id == id) return false;
  }

  return true;
}; //writing displaying data in console and html


var write = function write(response) {
  if (response) {
    // ul.innerHTML = "";
    // check by id
    response.warnings.forEach(function (warning) {
      if (isANewID(warning.id) && warning.severity >= textField.value) {
        accumulatedWarningsArray.push(warning);
        console.log("RESPONSE IS Id: ".concat(JSON.stringify(warning)));
        addBullet(JSON.stringify(warning));
      }
    });
  }
};

var poll_url = function poll_url(url) {
  return rxjs.interval(2000).pipe(rxjs.operators.concatMap(function () {
    return rxjs.ajax.ajax.getJSON(url);
  }));
}; // for educational purpose


var httpRequest = function httpRequest() {
  return poll_url("http://localhost:8080/warnings/since/" + date.value);
}; // .pipe(rxjs.operators.delay(1000));
// of - Emits variable amount of values in a sequence and then emits a complete notification.


var poll = rxjs.of({}).pipe( // actions.pipe(
rxjs.operators.mergeMap(function (_) {
  return httpRequest().pipe(rxjs.operators.catchError(function (e) {
    console.error(e);
    return rxjs.of(false);
  }));
}), // tap - Transparently perform actions or side-effects, such as logging
rxjs.operators.tap(write), rxjs.operators.tap(function (_) {
  return console.info('---waiting 3 secs to restart polling');
}), rxjs.operators.delay(3000), rxjs.operators.tap(function (_) {
  return console.info('---restarted polling');
}), // repeat - Repeats an observable on completion
rxjs.operators.repeat()); // const weatherSubscription = poll.subscribe();

var mainStream = rxjs.Observable.pipe(rxjs.operators.map(function (_) {
  return httpRequest().pipe(rxjs.operators.catchError(function (e) {
    console.error(e);
    return rxjs.of(false);
  }));
}));
var toggleStream = rxjs.fromEvent(subscribeToggle, 'change').pipe(rxjs.operators.map(function (e) {
  return e.target.checked;
}));
var resultStream = toggleStream.pipe(rxjs.operators.filter(function (x) {
  return x === true;
}), rxjs.operators.startWith(true), rxjs.operators.flatMap(function () {
  return mainStream.takeUntil(toggleStream);
}));
resultStream.subscribe(function (x) {
  return display.innerText += x;
}); // DONE - display current warnings when the page load and update them without reloading the page when they are updated on the server. 
// DONE - display changes in warnings since last update. 
// DONE - allow the user to set a minimal severity level to only display some of the warnings. Don't reload the warnings when the user changes the minimal severity level.
// DONE - allow the user to completely turn off warnings. Do not receive warnings from the server while they are turned off, but reload them when they are turned on again.
// var mainStream = rxjs.Observable.interval(100).map(() => '.');
// var toggleStream = Rx.Observable
//     .fromEvent(toggle, 'change')
//     .map(e => e.target.checked);
// var resultStream = toggleStream
//     .filter(x => x === true)
//     .startWith(true)
//     .flatMap(() => mainStream.takeUntil(toggleStream));
// resultStream.subscribe(x => display.innerText += x);