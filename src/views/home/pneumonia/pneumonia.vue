<template>
  <div>
    <h1>定义异步组件</h1>
    <div>
      <sync-component></sync-component>
      <async-component v-if="show"></async-component>
    </div>
    <button @click="handleCLick">切换异步组件</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { syncComponent, asyncComponent } from './asyncComponent'
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
    return {
      show,
      handleCLick
    }
  }
}
</script>
