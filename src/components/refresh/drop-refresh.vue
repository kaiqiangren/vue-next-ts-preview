<template>
  <div
    class="pull-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
  >
    <transition name="top">
      <div class="pull-text" v-show="isPull">下拉刷新</div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DropRefresh',
  setup() {
    const isPull = ref(false)
    let scrollTop;
    let startY;
    const handleTouchStart = (e) => {
      scrollTop = document.documentElement.scrollTop
      startY = e.targetTouches[0].pageY
    }
    const handleTouchEnd = (e) => {
      isPull.value = false
    }
    const handleTouchMove = (e) => {
      e.stopPropagation()
      const currentY = e.targetTouches[0].pageY
      if (scrollTop === 0) {
        if (startY <= currentY) {
          isPull.value = true
        } else {
          isPull.value = false
        }
      }
    }
    return {
      isPull,
      handleTouchStart,
      handleTouchEnd,
      handleTouchMove
    }
  }
}
</script>

<style scoped lang="scss">
  .pull-container {
    .pull-text {
      text-align: center;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #000000;
    }
  }
</style>
