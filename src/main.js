import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 取消测试github
createApp(App).use(store).use(router).mount('#app')
