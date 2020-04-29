<template>
  <div class="top-nav">
    <div class="top-nav-top">
      <div class="nav-top-left">
        <icon name="zhibo" class="top-icon" :hasInfo="true"></icon>
      </div>
      <div class="nav-top-middle">
        <div class="nav-top-search">
          <icon name="fangdajing" class="top-icon"></icon>
          <input class="search-input" />
        </div>
      </div>
      <div class="nav-top-right">
        <icon name="carryout"  class="top-icon"></icon>
      </div>
    </div>
    <div>
      <div
        v-for="(item,index) in navList"
        :key="index"
        class="nav-link"
        @click="handleSelectNav(index, item)"
        :class="{active: defaultActive === index}"
      >
        <span class="nav-link-context">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// 路由的使用，通过useRouter获取app所provide的路由
import { useRouter } from 'vue-router'
import Icon from "@/components/icon/icon";
export default {
  name: 'topNav',
  components: {Icon},
  setup() {
    const defaultActive = ref(1)

    const navList = ref([
      {
        name: '关注',
        path: '/attention'
      },
      {
        name: '推荐',
        path: '/'
      },
      {
        name: '热榜',
        path: '/hotList'
      },
      {
        name: '抗击肺炎',
        path: '/pneumonia'
      }
    ])
    const router = useRouter()
    const handleSelectNav = (index, item) => {
      defaultActive.value = index
      router.push({
        path: item.path
      })
    }
    return {
      defaultActive,
      navList,
      handleSelectNav
    }
  }
}
</script>

<style scoped lang="scss">
  .top-nav {
    background: #fff;
    position: fixed;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    font-size: 15px;
    top: 0;
    left: 0;
    width: 100%;
    .top-nav-top {
      height: 50px;
      line-height: 50px;
      display: grid;
      grid-template-columns: 50px 1fr 50px;
      text-align: center;
      .nav-top-middle {
        box-sizing: border-box;
        padding: 9px 0;
        text-align: left;
        .nav-top-search {
          background: #f6f6f6;
          line-height: 30px;
          padding: 2px 5px;
          height: 30px;
          & > span {
            margin-right: 5px;
          }
          .search-input {
            outline: none;
            border: none;
            background:#f6f6f6;
          }
        }
      }
    }
    .nav-link {
      width: 25%;
      height: 40px;
      line-height: 40px;
      color: #8590a6;
      cursor: pointer;
      text-align: center;
      display: inline-block;
    }
    .active {
      color: #444;
      font-weight: bold;
      .nav-link-context{
        border-bottom: 2px solid #444;
      }
    }
    .top-icon {
      font-size: 20px;
    }
  }
</style>
