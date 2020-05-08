<template>
  <div class="card-container">
    <div class="card-header">
      {{title}}
    </div>
    <div class="card-body">
      <div class="card-body-left">
        <div class="body-title">科大讯飞 <span><icon name="dui"></icon>已认证的官方账号</span></div>
        <div class="body-content">{{content}}</div>
      </div>
      <img class="body-right-image" :src="iconUrl">
    </div>
    <div class="card-footer">
      <span>5赞同 &#8226; 1评论</span>
      <span class="card-footer-right">&#8226;&#8226;&#8226;</span>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: 'card',
  components: {Icon},
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '01.如果你是博士，中国超过了14亿人口...'
    },
    iconUrl: {
      type: String,
      default: require('../../assets/img/logo.jpeg')
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/style/mixin";
  .card-container {
    height: 140px;
    background: #fff;
    box-shadow: 0 1px 0.8vw rgba(26, 26, 26, 0.1);
    margin: 8px 0;
    box-sizing: border-box;
    padding: 10px;
    .card-header {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
    }
    .card-body {
      display: grid;
      grid-template-columns: 1fr 80px;
      .card-body-left {
        margin-right: 8px;
      }
      .body-title {
        font-size: 14px;
        & > span {
          color: #8590a6;
          font-size: 12px;
        }
      }
      .body-content {
        font-size: 14px;
        padding: 4px 0;
        @include text-overflow(2);
        line-height: 24px;
        height: 48px;
      }
      .body-right-image {
        width: 100%;
        height: 100%;
      }
    }
    .card-footer {
      color: #8590a6;
      font-size: 12px;
      margin-top: 5px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      .card-footer-right {
        text-align: right;
      }
    }
  }
</style>
