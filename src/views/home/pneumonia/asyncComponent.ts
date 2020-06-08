import { defineAsyncComponent, defineComponent } from 'vue'
const loadingComponent = () => import('./loadingComponent.vue')

// 异步组件
export const asyncComponent = defineAsyncComponent({
  loader: () => import("./asyncComponents.vue"),
  loadingComponent: loadingComponent,
  errorComponent: loadingComponent,
  delay: 2000,
  timeout: 3000
});

// 同步组件
export const syncComponent = defineComponent({
  setup () {
    return () => `我是同步组件`
  }
})

