<template>
  <img src="./logo.png">
  <h1>Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ count }} times.</button>
  {{count2}}
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup(props, { attrs }) {
    const count = ref(0)
    const count2 = ref(0)
    const inc = () => {
      count.value++
      count2.value++
    }
    onMounted(() => {
      console.log('mounted')
    })

    onUnmounted(() => {
      console.log('unmounted')
    })
    return {
      count,
      count2,
      inc
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
