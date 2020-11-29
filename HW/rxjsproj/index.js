const button = document.querySelector('button')
const textField = document.querySelector('input')
// const subscribeBtn = document.getElementById('subscribeButton')
// const unsubscribeBtn = document.getElementById('unsubscribeButton')
const paragraph = document.querySelector('p')
const date = document.getElementById("date")
const ul = document.querySelector('ul')


// const actions = new rxjs.Subject()

////////////////////////    EX 10.1
const getText = () => {
    return textField.value
}

const log = (input) => {
    console.log(input);
    return input
}

const selectOdd = (input) => {
    if (input % 2)
        return input;
}

rxjs.fromEvent(button, 'click')
    .pipe( // the pipe is treversed in order without skips
        rxjs.operators.throttleTime(1000), // ensures the event is processed only every 1000 ms
        rxjs.operators.map(getText),
        rxjs.operators.map(log),
        rxjs.operators.filter(selectOdd),
        rxjs.operators.scan((count, input) => count + parseInt(input), 0) // NOTE: 0 is the initial value
    )
    .subscribe((x) => {
        paragraph.textContent = x
        console.log("Accumulated odd numbers are:", x)
    })

/////////////////////////      EX 10.2

const addBullet = text => {
    const li = document.createElement('li')
    li.innerText = text
    ul.appendChild(li)
    // input.value = ''
}

const poll_url = url => rxjs.interval(2000)
    .pipe(rxjs.operators.concatMap(() => rxjs.ajax.ajax.getJSON(url)))


// for educational purpose
const fakeDelayedRequest = () => poll_url("http://localhost:8080/warnings/since/"
    + date.value)
    .pipe(rxjs.operators.delay(1000));

//writing displaying data in console and html
const write = response => {
    if (response) {
        response.warnings.forEach(warning => {
            console.log(`RESPONSE IS Id: ${JSON.stringify(warning)}`);
            addBullet(JSON.stringify(warning))
        });
    }
};

// of - Emits variable amount of values in a sequence and then emits a complete notification.
const poll = rxjs.of({}).pipe(
    // actions.pipe(
    rxjs.operators.mergeMap(_ => fakeDelayedRequest()
        .pipe(rxjs.operators.catchError(e => { console.error(e); return rxjs.of(false) }))),
    // tap - Transparently perform actions or side-effects, such as logging
    rxjs.operators.tap(write),
    rxjs.operators.tap(_ => console.info('---waiting 3 secs to restart polling')),
    rxjs.operators.delay(3000),
    rxjs.operators.tap(_ => console.info('---restarted polling')),
    // repeat - Repeats an observable on completion
    rxjs.operators.repeat()
)


const weatherSubscription = poll.subscribe(function (value) {
    // This will unsubscribe even if the source emits a value synchronously:
    setTimeout(this.unsubscribe(), 5000);
    console.info('---unsubscribed');
    return;
});