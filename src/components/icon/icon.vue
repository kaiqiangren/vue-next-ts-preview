<template>
  <span
    class="iconfont"
    :class="[name, hasInfo? 'has-icon': '']"
  >
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    hasInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      name: props.name
    }
  }
}
</script>

<style scoped lang="scss">
  .has-icon {
    position: relative;
    &::after {
      content: '';
      width: 5px;
      height: 5px;
      position: absolute;
      top: 0;
      right: 0;
      background: red;
      border-radius: 50%;
    }
  }
</style>
