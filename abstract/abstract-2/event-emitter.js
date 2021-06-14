import { EventEmitter } from "events"
const eventEmitter = new EventEmitter()

eventEmitter.on("myEvent", (data) => {
    console.log(data)
})

eventEmitter.emit("myEvent", 1234)

//node event-emitter.js