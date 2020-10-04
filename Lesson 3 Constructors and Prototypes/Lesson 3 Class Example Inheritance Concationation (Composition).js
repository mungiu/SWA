//Concatenative inheritance
function NPC(options){
    function move(x,y){
        console.log(options.name + 'moved to (${x}, ${y})')
    }
}

// spread in objects
const o1 = {x:100, y:200}
const o2 = {z:300}
// declares x,y and initializes them to o1.x and o1.y
const {x, y} = o1 

const f = ({x, y}) => x + y
console.log(f(o1))


const o3 = {...o1, z:300}
console.log(o3)

const o4 = {...o1, ...o2}
console.log(o4)

function animal(options){
    function poop(){
        console.log('${options.name} pooped')
    }

    return {poop}
}

function canine(options){
    function bark(){
        console.log( options.name + ' barked')
    }

    return {bark}
}

function robot(options){
    function start(){
        console.log(options.name + ' started')
    }

    return {start}
}

function murderer(options){
    function kill(){
        console.log(options.name + ' killed ' + y.name)
    }

    return {kill}
}

// concatination (aka. composition)
// only getter for name (immutable)
function murderRobotDog(name){
    const options = {name}
    return {name: () => name, ...NPC(options), ...robot(options), ...murderer(options), ...canine(options)}
}

// alternative with public name
// this links everything to the current options which is NOT a copy anymore
function murderRobotDog2(name){
    const options = {name}
    Object.assign(options, NPC(options), robot(options), murderer(options), canine(options))
    return options
}


// testing
const mrd = murderRobotDog2('Fido')
mrd.bark()
// changing the dogs name is possible
mrd.name = 'Trofast'
mrd.bark()