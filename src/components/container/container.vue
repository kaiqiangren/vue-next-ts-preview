<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'container',
  setup() {
    return {}
  }
}
</script>

<style scoped>
  .container {
    padding-top: 2px;
  }
</style>
