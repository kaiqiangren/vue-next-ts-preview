<template>
  <div class="recommend-container">
    <button @click="loadData">点击加载数据</button>
    <drop-refresh
      ref="dropRef"
    >
      <card
        v-for="(item,index) in cardData"
        :key="index"
        :title="item.title"
        :content="item.content"
      >

      </card>
    </drop-refresh>
  </div>
</template>

<script>
import Card from "@/components/card/card";
import { reactive, ref } from 'vue'
import DropRefresh from "../../../components/refresh/drop-refresh";
export default {
  components: {
    DropRefresh,
    Card
  },
  setup() {
    // 创建模版引用
    const dropRef = ref(null)
    const cardData= reactive([
      {
        title: '你的学历超过了多少人?',
        content: '01.01.如果你是博士，中国超过了14亿人口01.如果你是博士，中国超过了14亿人口01.如果你是博士，中国超过了14亿人口',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      },
      {
        title: '学习Vue3.0?',
        content: '快别更新了，学不动了！',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      },
      {
        title: '学习Vue3.0?',
        content: '学不动了，就回家喂猪！',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      },
      {
        title: '学习Vue3.0?',
        content: '学不动了，就回家喂猪！',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      }
    ])
    const loadData = () => {
      dropRef.value.refreshStart()
      setTimeout(() => {
        dropRef.value.refreshComplete()
        cardData.push({
          title: '学习Vue3.0?'+ new Date().getTime(),
          content: '学不动了，就回家喂猪！',
          logoUrl: '',
          logoContext:'',
          imgUrl: '',
          isAuth: false // 是否认证
        })
      },1000)

    }
    return {
      dropRef,
      cardData,
      loadData
    }
  }
}
</script>

<style scoped>
  .recommend-container {
    padding-top: 2px;
  }
</style>
