<template>
  <div class="attention">
    <div class="attention-content">
      {{msg}}
    </div>
    {{modelTest}}
    <container v-model="modelTest"></container>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
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
    return {
      msg,
      modelTest
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
