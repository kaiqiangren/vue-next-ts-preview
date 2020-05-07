<template>
  <div>
    <top-nav></top-nav>
    <div class="home-container"
         @touchstart="handleTouchStart"
         @touchend="handleTouchEnd"
    >
      <transition-group
        :name="transitionName"
        :duration="500"
        tag="div"
        type="transition"
        :appear="true"
      >
        <router-view key="home-router-key"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/nav/topNav"
import { transitionName } from '../../mixin/routeTransition'
import { useRouter, useRoute } from "vue-router"

export default {
  name: 'Home',
  components: {
    TopNav
  },
  setup () {
    // 组件内路由获取方式
    const route = useRouter()
    route.beforeEach((to, from, next) => {
      if (to.meta.index < from.meta.index) {
        transitionName.value = 'left'
      } else if (to.meta.index > from.meta.index){
        transitionName.value = 'right'
      } else {
        transitionName.value = ''
      }
      next()
    })

    // const routeInfo = useRoute()
    // console.log(routeInfo)
    let touchStartX = 0
    let touchEndX = 0
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX
    }
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX
      if(touchStartX > touchEndX && touchStartX - touchEndX > 50) {
        // console.log(route)
        // console.log(route.getRoutes())
        // console.log(route.currentRoute)
      }
    }
    return {
      transitionName,
      handleTouchStart,
      handleTouchEnd
    }
  }
}
</script>

<style scoped>
  .home-container {
    margin-top: 90px;
    margin-bottom: 50px;
  }
</style>
