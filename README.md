# Vue3.0

> Vue3.0是2020年4月刚刚发布了beta版本的全新Vue版本
## 项目地址:
https://github.com/kaiqiangren/vue-next-ts-preview

## 一、Vue3.0与Vue2.0的对比:
### 优点：
1. 将Vue内部的绝大部分api对外暴露，使Vue具备开发大型项目的能力，例如compile编译api等
2. webpack的treeshaking支持度友好
3. 使用Proxy进行响应式变量定义，性能提高2-3倍
4. 可在Vue2.0中单独使用composition-api插件，或者直接用它开发插件
5. 对typescript支持更加友好
6. 面向未来：对于尤雨溪最近创新的vite开发服务器（舍弃webpack、底层为Koa框架的高性能开发服务器）,直接使用的Vue3.0语法
### 缺点:
1. 只支持IE11及以上
2. 对于习惯了Vue2.0开发模式的开发者来说，增加了心智负担，对开发者代码组织能力有考验
> 同时也是能力提升的机会吧，特别喜欢Vue作者的设计初心:让开发者随着框架一起成长!


## 二、Vue3.0正确的打开方式
### 1、项目搭建
1. 需要安装vue-cli4代最新脚手架，可以通过执行如下npm 命令安装/更新脚手架版本
```npm
npm i @vue/cli -g
```
2. 然后在创建项目后，执行vue add vue-next向项目添加Vue3.0
```npm
vue create [projectName]
cd [projectName]
vue add vue-next
```
3. 如下例子为使用typescript + Vue3.0 开发的项目依赖，也可以直接使用
```json
{
  "name": "vue-next-ts-preview",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "dev": "vue-cli-service serve"
  },
  "dependencies": {
    "core-js": "^3.6.4",
     "normalize.css": "^8.0.1",
     "vue": "^3.0.0-beta.14",
     "vue-router": "^4.0.0-alpha.12",
     "vuex": "^4.0.0-beta.2"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.26.0",
    "@typescript-eslint/parser": "^2.26.0",
    "@vue/cli-plugin-babel": "~4.3.0",
    "@vue/cli-plugin-eslint": "~4.3.0",
    "@vue/cli-plugin-router": "~4.3.0",
    "@vue/cli-plugin-typescript": "~4.3.0",
    "@vue/cli-plugin-vuex": "~4.3.0",
    "@vue/cli-service": "~4.3.0",
    "@vue/compiler-sfc": "^3.0.0-beta.1",
    "@vue/eslint-config-typescript": "^5.0.2",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0-alpha.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.2",
    "typescript": "~3.8.3",
    "vue-cli-plugin-vue-next": "~0.1.2"
  }
}
```

### 2、使用文档
1. 项目入口main.ts
```typescript
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

### 3、语法相关
1. 响应式变量声明
```js
import { ref, reactive } from 'vue'
// 方式一： 可传入任意类型的值，改变值的时候必须使用其value属性,例 refData.value = 2
const refData = ref(0)

// 方式二： 只能传入引用类型的值
const data = reactive({
  tableData: [
    {
      name: '姓名1'
    }
  ]
})

// 使用响应式变量前，必须在Vue文件的setup函数中 执行/return 出去
setup (props, context){
  return {
    refData,
    data
  }
}
```

2. computed
```js
import { watch, watchEffect, computed } from 'vue'

// 1、创建只读的计算属性
const computedCount = computed(() => count.value + 1)


// 2、创建可读可写的计算属性
const computedCount2 = computed({
      get: () => writeCount.value + 2,
      set: (val) => {
        return writeCount.value =  val + 2
      }
})

// 可以直接修改computed的值，在Vue2.x中无法修改
// computedCount2 = 123 
```

3. watch & watchEffect
```js
import { ref, watch, watchEffect } from 'vue'
const count = ref(0)
// watchEffect会自动收集响应式依赖
watchEffect(() => console.log(count.value))

// 监听指定基础类型数据
watch(count, (now, prev) => {
      console.log(now, prev, 'count')
})

const data = reactive({
  tableData: [
    {
      name: '姓名1'
    }
  ]
})
// 监听reactive创建的响应式变量,可以直接监听对象，必须使用内联函数
watch(() => data.tableData, (now, prev) => {
   console.log(now, prev, 'tableData')
})
```

4. provide & inject
```js
import { reactive, provide , inject} from 'vue'

const data = reactive({
  tableData: [
    {
      name: '姓名1'
    }
  ]
})
// 根级/父级组件
// provide 这里如果提供的是响应式变量，inject也会触发响应
provide('provideName', 'provideData')
provide('provideReactive', data.tableData)


// 子级/孙级组件
setup () {
  const provideData = inject('provideName')
  const provideReactive = inject('provideReactive')
  return {
    provideData,
    provideReactive
  }
}
```

5. 生命周期
```html
Vue3.0生命周期         说明                                                   对应的Vue2.0生命周期
setup               | 初始化数据阶段的生命周期，介于beforeCreate与created之间  相当于beforeCreate、created的合并
onBeforeMount       | 组件挂载前                                          beforeMount
onMounted           | 实例挂载完毕                                         mounted
onBeforeUpdate      | 响应式数据变化前                                      beforeUpdate
onUpdated           | 响应式数据变化完成                                    updated
onBeforeUnmount     | 实例销毁前                                           beforeDestroy
onUnmounted         | 实例已销毁                                           destroyed
onErrorCaptured     | 错误数据捕捉                                            --
```


6. 路由
```js
// 组件内部路由拦截器的使用方式
import { useRouter, useRoute } from "vue-router"

setup() {
  // 组件内路由
  const router = useRouter()
  router.beforeEach((to, from, next) => {
    next()
  })
  // 组件内路由信息
  const route = useRoute()
}

```

7.vuex
> 创建Store
```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    userInfo: {
      name:'renkq'
    }
  },
  mutations: {
    getUserInfo (state, name) {
      state.userInfo.name = name
    }
  },
  actions: {
    asyncGetUserInfo ({ commit }) {
      setTimeout(() => {
        commit("getUserInfo", +new Date() + 'action')
      },2000)
    }
  },
  getters: {
    userInfoGetter (state) {
      return state.userInfo.name
    }
  }
})

export default store

```
> 组件内使用store
```js
import {
  useStore,
  // mapState,
  // mapMutations,
  // mapActions,
  // mapGetters
} from 'vuex'

export default {
  name: 'self',
  setup() {
    const store = useStore()
    console.log(store, 'store')
    console.log(store.getters, 'getters')
    const state = store.state
    const getters = store.getters
    // console.log(mapState(store.state),'mapState')
    // console.log(mapMutations(store._mutations),'mapMutations')
    // console.log(mapActions(store._actions),'mapActions')
    // console.log(mapGetters(store.getters),'mapGetters')
    const methods = {
      // 处理commit
      handleMutation: () => {
        store.commit('getUserInfo', +new Date)
      },
      // 处理dispatch
      handleAction: () => {
        store.dispatch('asyncGetUserInfo')
      }
    }
    return {
      state,
      getters,
      ...methods
    }
  }
}
```

8. v-model

```js
// 自定义v-model组件时，需要使用update:modelValue事件进行触发
setup(props, { emit }){
   const handleClick = () => {
      emit('update:modelValue', params)
   }
   return {
      handleClick
  }
}
```

9. directive
> 定义指令
```js
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


```
> 全局注册指令
```js
const app = createApp(App)
app.use(router)
app.use(store)
app.directive('custom', customDirective)
app.mount('#app')

```

> 组件内使用指令
```js
import { customDirective } from '../../directive/directive'
export default {
  setup() {
    return {}
  },
  directives: {
    custom: customDirective
  }
}
```

10. nextTick
```js
import { nextTick, onBeforeMount } from 'vue'

{
  setup () {
    
    onBeforeMount(() => {
      nextTick(() => {
        
      })
    })
    
  }
}
```

11. 定义组件defineAsyncComponent & defineComponent

> 同步组件与异步组件的区别:
> 同步组件：在组件加载时自动加载；
> 异步组件：在渲染时加载;

```js
// 一、定义同步组件
const syncComponent = defineComponent(() => import('./syncComponents.vue'))


// 二、定义异步组件
// 方式1 
const asyncComponent = defineAsyncComponent({
  loader: () => import("./asyncComponents.vue"),
  loadingComponent: loadingComponent,
  errorComponent: loadingComponent,
  delay: 2000,
  timeout: 3000
});
// 方式2
const asyncComponent = defineAsyncComponent(() => import('./syncComponents.vue'));
```
