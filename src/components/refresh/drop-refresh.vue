<template>
  <div
    class="pull-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
  >
    <transition name="top">
      <div class="pull-text" v-show="loading">
        {{props.refreshText}}<div class="rotate"><icon  name="jiazai"></icon></div>
      </div>
    </transition>
    <slot></slot>
    <div class="pull-text">
      <span  v-show="!loadingFooter">{{props.loadingBottomText}}</span>
      <div class="rotate"  v-show="loadingFooter"><icon  name="jiazai"></icon></div>
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
    refreshText: {
      type: String,
      default: '努力加载中'
    },
    loadingBottomText: {
      type: String,
      default: '没有更多数据啦!'
    },
  },
  setup(props, { emit }) {
    // 顶部加载动画
    const loading = ref(false)
    // 底部加载动画
    const loadingFooter = ref(false)


    let scrollTop;
    let startY;
    const methods = {
      handleTouchStart: (e) => {
        scrollTop = document.documentElement.scrollTop
        startY = e.targetTouches[0].pageY
      },
      handleTouchEnd: () => {
        if (loading.value) {
          emit('refresh')
        }
      },
      handleTouchMove: (e) => {
        e.stopPropagation()
        const currentY = e.targetTouches[0].pageY
        const diff = Math.abs(startY - currentY)
        if (scrollTop === 0) {
          if (startY <= currentY && diff > 80) {
            loading.value = true
          }
        }
      },
      // 开始下拉刷新
      refreshStart: () => {
        loading.value = true
      },
      // 下拉刷新完成
      refreshComplete: () => {
        loading.value = false
      },
      // 滚动刷新开始
      infiniteStart: () => {
        loadingFooter.value = true
      },
      // 滚动刷新完成
      infiniteComplete: () => {
        loadingFooter.value = false
      }
    }

    onMounted(() => {
      document.body.onscroll = () => {
        // 距离底部的距离
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        const bottomDistance = document.documentElement.offsetHeight - window.innerHeight - scrollTop
        if (bottomDistance <= 50) {
          loadingFooter.value = true
          emit('infinite')
        }
      }
    })
    onUnmounted(() => {
      document.body.onscroll = null
    })

    return {
      props,
      loading,
      loadingFooter,
      ...methods
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
    padding: 5px 0;
    .pull-text {
      text-align: center;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #000000;
    }

  }
</style>
