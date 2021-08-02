<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="text" v-model="message">
    <button @click="postMessage">send message</button>
    {{time}}
  </div>
</template>

<script>
import {doHardWork} from '../worker-api'
export default {
  name: 'App',
  data() {
    return {
      message: "",
      time: new Date()
    }
  },
  mounted () {
    setInterval(()=>{
      this.time - new Date()
    }, 300);
  },
  methods: {
   async postMessage() {
     const result = await doHardWork()
     console.log('result', result);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
