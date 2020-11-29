// const unsubscribeButton = document.querySelector('button')
const textField = document.querySelector('input')
const date = document.getElementById("date")
const ul = document.querySelector('ul')
const listItems = ul.getElementsByTagName('li');
const subscribeToggle = document.getElementById('subscribeToggle')
var severity = 0;
var accumulatedWarningsArray = [];

////////////////////////    EX 10.1
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

const addBullet = text => {
    const li = document.createElement('li')
    li.innerText = text
    ul.appendChild(li)
}

const isANewID = (id) => {
    for (let i = 0; i <= accumulatedWarningsArray.length - 1; i++) {
        if (accumulatedWarningsArray[i].id == id)
            return false;
    }
    return true;
}

//writing displaying data in console and html
const write = response => {
    if (response) {
        // ul.innerHTML = "";
        // check by id
        response.warnings.forEach(warning => {
            if (isANewID(warning.id) && warning.severity >= textField.value) {
                accumulatedWarningsArray.push(warning)
                console.log(`RESPONSE IS Id: ${JSON.stringify(warning)}`)
                addBullet(JSON.stringify(warning))
            }
        });
    }
};

const poll_url = url => rxjs.interval(2000)
    .pipe(rxjs.operators.concatMap(() => rxjs.ajax.ajax.getJSON(url)))

// for educational purpose
const httpRequest = () => poll_url("http://localhost:8080/warnings/since/"
    + date.value);
// .pipe(rxjs.operators.delay(1000));

// of - Emits variable amount of values in a sequence and then emits a complete notification.
const poll = rxjs.of({}).pipe(
    // actions.pipe(
    rxjs.operators.mergeMap(_ => httpRequest()
        .pipe(rxjs.operators
            .catchError(e => { console.error(e); return rxjs.of(false) })
        )
    ),
    // tap - Transparently perform actions or side-effects, such as logging
    rxjs.operators.tap(write),
    rxjs.operators.tap(_ => console.info('---waiting 3 secs to restart polling')),
    rxjs.operators.delay(3000),
    rxjs.operators.tap(_ => console.info('---restarted polling')),
    // repeat - Repeats an observable on completion
    rxjs.operators.repeat()
)

// const weatherSubscription = poll.subscribe();





var mainStream = rxjs.Observable.pipe(
    rxjs.operators.map(_ => httpRequest()
        .pipe(rxjs.operators.catchError(e => { console.error(e); return rxjs.of(false) })))
);

var toggleStream = rxjs.fromEvent(subscribeToggle, 'change')
    .pipe(
        rxjs.operators.map(e => e.target.checked))

var resultStream = toggleStream
    .pipe(
        rxjs.operators.filter(x => x === true),
        rxjs.operators.startWith(true),
        rxjs.operators.flatMap(() => mainStream.takeUntil(toggleStream)))

resultStream.subscribe(x => display.innerText += x);


// DONE - display current warnings when the page load and update them without reloading the page when they are updated on the server. 
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