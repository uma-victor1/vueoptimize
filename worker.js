import * as Comlink from 'comlink'

const fns = {
    toUpperCase(msg) {
        return msg.toUpperCase()
    },
    doHardWork() {
      setTimeout(()=>{
        console.log("do hard work");
      },3000)
  }
}

Comlink.expose(fns)


// self.addEventListener('message', e => {
//     console.log('worker got, ', e);

//     self.postMessage(e.data.toUpperCase())
// })