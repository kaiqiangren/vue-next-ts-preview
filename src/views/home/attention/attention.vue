<template>
  <div class="attention">
    <div class="attention-content">
      {{msg}}
    </div>
    {{modelTest}}
    <container v-model="modelTest"></container>
    <div>watch监听多个属性测试</div>

    <button @click="changePosition">改变坐标</button>
    <div>
      <p>X:{{position.x}}</p>
      <p>Y:{{position.y}}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import Container from "../../../components/container/container";
export default {
  name: 'attention',
  components: {Container},
  setup () {
    const msg = ref('Hello attention')
    const modelTest = reactive(['modelTest'])
    const route  = useRoute();
    console.log(route.params)


    const position = reactive({
      x: 1,
      y: 1
    })
    const changePosition = () => {
      position.x++
      position.y++
    }
    // 监听多个属性
    watch([
          () => position.x,
          () => position.y,
        ], ([x1, y1], [nx1, ny1]) => {
          console.log('x1,y1', x1, y1)
          console.log('nx1,ny1', nx1, ny1)
        },
        {
          flush: 'post', // 默认, 在视图渲染后触发
          // flush: 'pre', // 在视图渲染之前触发
          // flush: 'sync' // 无阻塞，异步触发
        })
    return {
      msg,
      modelTest,
      position,
      changePosition
    }
  }
}
</script>

<style scoped lang="scss">
  .attention {
    width: 100%;
    padding-top: 10px;
    .attention-content {
      height: 80px;
      background: #fff;
    }
  }
</style>
