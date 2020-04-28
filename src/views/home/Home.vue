<template>
  <div>
    <top-nav></top-nav>
    <div class="home-container">
<!--      <transition-group-->
<!--        :name="transitionName"-->
<!--        :duration="500"-->
<!--        type="transition"-->
<!--      >-->
        <router-view key="home-router-key"/>
<!--      </transition-group>-->
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/nav/topNav"
import { transitionName } from '../../mixin/routeTransition'
export default {
  name: 'Home',
  components: {
    TopNav
  },
  setup () {
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
  /*fade-enter-active fade-enter-to  fade-leave-active fade-leave-to */

  .left-enter-active {
    transition: transform .5s;
    transform: translateX(100%);
  }
  .left-leave-active {
    transition: transform .5s;
  }
  .left-enter-to {
    transform: translateX(0);
  }
  .left-leave-to {
    transform: translateX(100%);
  }

  .right-enter-active {
    transition: transform .5s;
    transform: translateX(-100%);
  }
  .right-leave-active {
    transition: transform .5s;
  }
  .right-enter-to {
    transform: translateX(0);
  }
  .right-leave-to {
    transform: translateX(-100%);
  }
</style>
