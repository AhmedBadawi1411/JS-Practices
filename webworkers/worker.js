const { parentPort } = require("worker_threads");

parentPort.on("message", (num) => {
    let result = num * 2;
    parentPort.postMessage(result); 
})