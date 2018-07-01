// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 重置样式
import 'styles/reset.css'
// 移动端边框1px问题解决
import 'styles/border.css'
import 'styles/iconfont.css'
// 移动端click三百毫秒延迟解决
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
