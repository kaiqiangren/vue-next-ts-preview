<template>
  <div class="attention">
    <div class="attention-content">
      {{msg}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'attention',
  setup () {
    const msg = ref('Hello attention')
    return {
      msg
    }
  }
}
</script>

<style scoped lang="scss">
  .attention {
    width: 100%;
    padding-top: 10px;
    .attention-content {
      height: 80px;
      background: #fff;
    }
  }
</style>
