import Worker from 'worker-loader!./worker'
import * as Comlink from 'comlink'


const worker = Comlink.wrap(new Worker())

export const doHardWork = worker.doHardWork
// worker.addEventListener('message', (e)=>{
//     console.log('we got back', e);
// })

// export function sendMessage(msg){
//     worker.postMessage(msg)
// }

