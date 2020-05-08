<template>
  <div
    class="pull-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
  >
    <transition name="top">
      <div class="pull-text" v-show="isPull">
        {{props.loadingText}}<div class="rotate"><icon  name="jiazai"></icon></div>
      </div>
    </transition>
    <slot></slot>
    <div class="pull-text">
      {{props.loadingBottomText}}
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue'
import Icon from "../icon/icon";

export default {
  name: 'DropRefresh',
  components: {Icon},
  props: {
    loadingText: {
      type: String,
      default: '努力加载中'
    },
    loadingBottomText: {
      type: String,
      default: '没有更多数据啦!'
    },
  },
  setup(props, { emit }) {
    const isPull = ref(false)
    let scrollTop;
    let startY;
    const handleTouchStart = (e) => {
      console.log(e)
      scrollTop = document.documentElement.scrollTop
      startY = e.targetTouches[0].pageY
    }
    const handleTouchEnd = () => {
      if (isPull.value) {
        emit('refresh')
      }
    }
    const handleTouchMove = (e) => {
      e.stopPropagation()
      const currentY = e.targetTouches[0].pageY
      const diff = Math.abs(startY - currentY)
      if (scrollTop === 0) {
        if (startY <= currentY && diff > 80) {
          isPull.value = true
        }
      }
    }

    // onMounted(() => {
    //   document.body.onscroll = (e) => {
    //     console.log(document.documentElement.scrollTop, e)
    //   }
    // })
    // onUnmounted(() => {
    //   document.body.onscroll = null
    // })

    // 处理刷新开始
    const refreshStart = () => {
      isPull.value = true
    }
    // 处理刷新完成
    const refreshComplete = () => {
      isPull.value = false
    }

    return {
      props,
      isPull,
      handleTouchStart,
      handleTouchEnd,
      handleTouchMove,
      refreshStart,
      refreshComplete
    }
  }
}
</script>

<style scoped lang="scss">
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .rotate {
    display: inline-block;
    vertical-align: top;
    transform-origin: center;
    width: 18px;
    height: 18px;
    animation:loading 1s infinite linear;
  }
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
