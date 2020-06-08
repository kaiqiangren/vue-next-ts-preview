<template>
  <div class="bottom-nav">
    <div
      v-for="(item, index) in navList"
      :key="index"
      @click="handleClickNav(item, index)"
       class="bottom-nav-item"
      :class="{ active: navActive === index || item.active}"
    >
      <icon v-if="navActive !== index" :name="item.icon"></icon>
      <icon v-if="navActive === index" :name="item.activeIcon"></icon>
      <div v-if="item.name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Icon from "../icon/icon"
import router from '@/router/index'
export default {
  name: 'bottomNav',
  components: {
    Icon
  },
  setup() {
    const navActive = ref(0)
    const navList = ref([
      {
        id: 1,
        name: '首页',
        path: '/',
        icon: 'home',
        activeIcon: 'shouye'
      },
      {
        id: 2,
        name: '会员',
        path: '/vip',
        icon: 'huangguan1',
        activeIcon: 'huangguan2'
      },
      {
        id: 3,
        name: '',
        path: '',
        icon: 'jiahao',
        activeIcon: 'jiahao',
        active:true
      },
      {
        id: 4,
        name: '消息',
        path: '/notify',
        icon: 'bell',
        activeIcon: 'tongzhi'
      },
      {
        id: 5,
        name: '我的',
        path: '/self',
        icon: 'user',
        activeIcon: 'yonghu'
      }
    ])

    const handleClickNav = (item, index) => {
      if (item.path) {
        navActive.value = index
        router.push({
          path: item.path
        })
      }
    }

    return {
      navList,
      navActive,
      handleClickNav
    }
  }
}
</script>

<style scoped lang="scss">
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    align-items: center;
    text-align: center;
    background: #fff;
    .bottom-nav-item {
      font-size: 12px;
      color: #1a1a1a;
    }
    .active {
      color: #0084ff;
    }
  }
</style>
