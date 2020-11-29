"use strict";

var button = document.querySelector('button');
var textField = document.querySelector('input'); // const subscribeBtn = document.getElementById('subscribeButton')
// const unsubscribeBtn = document.getElementById('unsubscribeButton')

var paragraph = document.querySelector('p');
var date = document.getElementById("date");
var ul = document.querySelector('ul'); // const actions = new rxjs.Subject()
////////////////////////    EX 10.1

var getText = function getText() {
  return textField.value;
};

var log = function log(input) {
  console.log(input);
  return input;
};

var selectOdd = function selectOdd(input) {
  if (input % 2) return input;
};

rxjs.fromEvent(button, 'click').pipe( // the pipe is treversed in order without skips
rxjs.operators.throttleTime(1000), // ensures the event is processed only every 1000 ms
rxjs.operators.map(getText), rxjs.operators.map(log), rxjs.operators.filter(selectOdd), rxjs.operators.scan(function (count, input) {
  return count + parseInt(input);
}, 0) // NOTE: 0 is the initial value
).subscribe(function (x) {
  paragraph.textContent = x;
  console.log("Accumulated odd numbers are:", x);
}); /////////////////////////      EX 10.2

var addBullet = function addBullet(text) {
  var li = document.createElement('li');
  li.innerText = text;
  ul.appendChild(li); // input.value = ''
};

var poll_url = function poll_url(url) {
  return rxjs.interval(2000).pipe(rxjs.operators.concatMap(function () {
    return rxjs.ajax.ajax.getJSON(url);
  }));
}; // for educational purpose


var fakeDelayedRequest = function fakeDelayedRequest() {
  return poll_url("http://localhost:8080/warnings/since/" + date.value).pipe(rxjs.operators.delay(1000));
}; //writing displaying data in console and html


var write = function write(response) {
  if (response) {
    response.warnings.forEach(function (warning) {
      console.log("RESPONSE IS Id: ".concat(JSON.stringify(warning)));
      addBullet(JSON.stringify(warning));
    });
  }
}; // of - Emits variable amount of values in a sequence and then emits a complete notification.


var poll = rxjs.of({}).pipe( // actions.pipe(
rxjs.operators.mergeMap(function (_) {
  return fakeDelayedRequest().pipe(rxjs.operators.catchError(function (e) {
    console.error(e);
    return rxjs.of(false);
  }));
}), // tap - Transparently perform actions or side-effects, such as logging
rxjs.operators.tap(write), rxjs.operators.tap(function (_) {
  return console.info('---waiting 3 secs to restart polling');
}), rxjs.operators.delay(3000), rxjs.operators.tap(function (_) {
  return console.info('---restarted polling');
}), // repeat - Repeats an observable on completion
rxjs.operators.repeat());
var weatherSubscription = poll.subscribe(function (value) {
  // This will unsubscribe even if the source emits a value synchronously:
  setTimeout(this.unsubscribe(), 5000);
  console.info('---unsubscribed');
  return;
});