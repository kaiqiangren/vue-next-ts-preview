# Vue3.0语法介绍

## setup函数
```js
export default {
  //setup创建组件实例时，在初始组件解析后立即调用。在生命周期方面，它在beforeCreate之后,created之前被调用（2.x）。
  setup () {
    return undefined;
  }
}
```
