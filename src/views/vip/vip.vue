<template>
  <div>
    directives-test
    <div v-custom></div>
  </div>
</template>

<script>
// 组件内使用指令
import { customDirective } from '../../directive/directive'
export default {
  setup() {
    return {}
  },
  directives: {
    custom: customDirective
  }
}
</script>

<style scoped>
</style>
