<template>
  <div
    class="nav-link"
    :class="{
      active: props.active
    }">
    <span class="nav-link-context"><slot></slot></span>
  </div>
</template>

<script>

export default {
  name: 'TopNavItem',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  // 为了保障props响应性，需要将props全部返回
  setup (props) {
    return {
      props
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
