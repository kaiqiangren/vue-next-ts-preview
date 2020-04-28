<template>
  <div class="card-container">
    <div class="card-header">
      {{title}}
    </div>
    <div class="card-body">
        {{content}}
    </div>
    <div class="card-footer">

    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '01.如果你是博士，中国超过了14亿人口...'
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .card-container {
    height: 140px;
    background: #fff;
    box-shadow: 0 1px 0.8vw rgba(26, 26, 26, 0.1);
    margin: 10px 0;
    /*&:last-child {*/
    /*  margin-bottom: 50px;*/
    /*}*/
  }
</style>
