<template>
  <div class="recommend-container">
    <card
      v-for="(item,index) in cardData"
      :key="index"
      :title="item.title"
      :content="item.content"
    >

    </card>
  </div>
</template>

<script>
import Card from "@/components/card/card";
import { reactive } from 'vue'
export default {
  components: {
    Card
  },
  setup() {
    const cardData= reactive([
      {
        title: '你的学历超过了多少人?',
        content: '01.如果你是博士，中国超过了14亿人口...',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      },
      {
        title: '如果学习Vue3.0?',
        content: '快别更新了，学不动了！',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      },
      {
        title: '如果学习Vue3.0?',
        content: '快别更新了，学不动了！',
        logoUrl: '',
        logoContext:'',
        imgUrl: '',
        isAuth: false // 是否认证
      },
      // {
      //   title: '如果学习Vue3.0?',
      //   content: '快别更新了，学不动了！',
      //   logoUrl: '',
      //   logoContext:'',
      //   imgUrl: '',
      //   isAuth: false // 是否认证
      // }
    ])
    return {
      cardData
    }
  }
}
</script>

<style scoped>
  .recommend-container {
    padding-top: 2px;
  }
</style>
