import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//boostrap import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//custom variables import
import "@/assets/scss/app.scss";

createApp(App)
.use(store)
.use(router)

.mount('#app')
