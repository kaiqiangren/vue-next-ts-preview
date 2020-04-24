<template>
  <div>HelloWorld</div>
</template>

<script>
  import { ref, onMounted, onUnmounted } from 'vue'

  export default {
    setup(props, {attrs}) {
      onMounted(() => {
        console.log('mounted')
      })
      onUnmounted(() => {
        console.log('unmounted')
      })
      return {}
    }
  }
</script>

<style scoped>
</style>
