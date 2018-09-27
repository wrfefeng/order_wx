// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as httpHandle from './http/http'
import VueMessage from './plugins/message'
import VueNotice from './plugins/notice'
import VueWechatTitle from 'vue-wechat-title'
import './base/styles/index.scss'
Vue.config.productionTip = false
Vue.prototype.$get = httpHandle.getHandle
Vue.prototype.$post = httpHandle.postHandle
Vue.prototype.$delete = httpHandle.deleteHandle
Vue.prototype.$patch = httpHandle.patchHandle
Vue.prototype.$all = httpHandle.allhandle

Vue.use(VueMessage)
Vue.use(VueNotice)
Vue.use(VueWechatTitle)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
