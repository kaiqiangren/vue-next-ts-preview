<template>
  <div class="container">
    <slot></slot>
    <button @click="handleClick">点击emit</button>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'container',
  props: {
    value: {
      type:Array,
      default () {
        return []
      }
    }
  },
  setup(props, { emit }) {
    // 自定义v-model组件时，需要使用update:modelValue事件进行触发
    const handleClick = () => {
      emit('update:modelValue', ['I am a container!'])
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 2px;
  }
</style>
