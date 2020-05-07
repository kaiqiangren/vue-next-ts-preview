import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/iconfont/iconfont.css'
import './assets/style/style.scss'
// 主题样式
// import './assets/style/theme.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
