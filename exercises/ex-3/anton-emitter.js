import { EventEmitter } from 'events';

const x = new EventEmitter();
console.log(12);

x.addListener("green", () => console.log("green"));
x.addListener("yellow", () => console.log("yellow"));
x.addListener("red", () => console.log("red"));


const sleep = d => new Promise(resolve => setTimeout(resolve, d));

export const loop = async () => {
    x.emit("green");
    await sleep(5000);

    x.emit("yellow");
    await sleep(1000);

    x.emit("red");
    await sleep(5000);

    x.emit("yellow");
    await sleep(1000);

    await loop();
}

loop();
