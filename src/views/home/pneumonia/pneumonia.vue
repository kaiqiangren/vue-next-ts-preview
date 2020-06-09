<template>
  <div>
    <h1>定义异步组件</h1>
    <div>
      <sync-component></sync-component>
      <async-component v-if="show"></async-component>
    </div>
    <button @click="handleCLick">切换异步组件</button>
    <h1>websocket连接</h1>
    <button @click="createConnect">创建websocket连接</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { syncComponent, asyncComponent } from './asyncComponent'
import io from 'socket.io-client'
export default {
  components: {
    syncComponent,
    asyncComponent
  },
  setup () {
    const show = ref(false)
    const handleCLick = () => {
      show.value = !show.value
    }

    const createConnect = () => {
      const socket = io('ws://localhost:8000')
      socket.on('connection', client => {
        console.log(client)
      })
      socket.on('message', async (message) => {
        console.log(message)
      })
    }

    return {
      show,
      handleCLick,
      createConnect
    }
  }
}
</script>
