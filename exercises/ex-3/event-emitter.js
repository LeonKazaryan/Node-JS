import { EventEmitter } from "events"
const eventEmitter = new EventEmitter()


eventEmitter.on("onRed", () => {
    console.log("It's red. Please wait")
})

eventEmitter.on("onYellow", () => {
    console.log("It's yellow. Please wait")
})

eventEmitter.on("onGreen", () => {
    console.log("It's green. Now you can go")
})



const start = () => {
    eventEmitter.emit("onGreen")
    setTimeout(() =>{
        eventEmitter.emit("onYellow")
        setTimeout(()=>{
            eventEmitter.emit("onRed")
            setTimeout(() => {
                eventEmitter.emit("onYellow")
            }, 3000)
        }, 1000)
    }, 3000)
}

start()

setInterval(() => {
    start()
}, 6600);


//node event-emitter.js