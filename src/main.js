import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

// toast 吐司
import toast from '@/components/common/toast'

// import axios from 'axios'
// 安装 toast 插件
Vue.use(toast)

// vue 懒加载插件的安装
Vue.use(VueLazyload, {
  loading: require('./assets/img/load/nan.png')
})

// 解决移动端 300ms的延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
