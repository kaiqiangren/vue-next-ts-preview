<template>
  <div>
    <top-nav></top-nav>
    <div class="home-container">
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
import { useRouter } from "vue-router"

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
      } else {
        transitionName.value = 'right'
      }
      next()
    })
    return {
      transitionName
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
