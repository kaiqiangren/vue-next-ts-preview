<template>
  <div id="box">
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from "@/components/nav/bottomNav"
export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style>
  body {
    background: #f6f6f6;
  }
  #box {
    overflow-x: hidden;
  }
</style>
