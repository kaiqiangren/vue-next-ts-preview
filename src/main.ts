import { createApp} from 'vue';
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'normalize.css'
import './assets/iconfont/iconfont.css'
import './assets/style/style.scss'
// h5调试
import Vconsole from 'vconsole'
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development') {
  new Vconsole()
}
// import { customDirective } from './directive/directive'
// 主题样式
// import './assets/style/theme.scss'

const app = createApp(App)
app.use(router)
app.use(store)
// 全局注册directive
// app.directive('custom', customDirective)
app.mount('#app')
