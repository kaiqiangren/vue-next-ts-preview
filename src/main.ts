import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/iconfont/iconfont.css'
import './assets/style/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
