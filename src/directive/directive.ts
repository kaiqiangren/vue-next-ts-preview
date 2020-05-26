import { ObjectDirective } from 'vue'

// 使用ObjectDirective声明指令类型即可，因为源码内部指定了默认类型说明
export const customDirective: ObjectDirective = {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode)
  },
  mounted() { console.log('mounted') },
  beforeUpdate() { console.log('beforeUpdate') },
  updated() { console.log('updated') },
  beforeUnmount() { console.log('beforeUnmount') },
  unmounted() { console.log('unmounted') }
}


