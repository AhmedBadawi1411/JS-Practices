/**
 * 
 * 
 * 
 * 
 * 
 */


const {Worker} = require("worker_threads");
const path = require("path");
const workerPath = path.resolve(__dirname, "worker.js");
const workerInstance = new Worker(workerPath);

workerInstance.postMessage(5)

workerInstance.on("message", (result)=>{
    console.log(result);
    workerInstance.terminate()
})


setTimeout(() => {
    
    workerInstance.postMessage(5)
}, 3000);



console.log("congratulations");
