import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/views/home/index')
const orderPreview = () => import('@/views/orderPreview/index')
const personal = () => import('@/views/personal/index')
const consume = () => import('@/views/consume/index')
const settle = () => import('@/views/settle/index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/orderPreview',
      name: 'OrderPreview',
      component: orderPreview,
      meta: {
        title: '订单预览'
      }
    },
    {
      path: '/consume',
      name: 'Consume',
      component: consume,
      meta: {
        title: '当前消费  '
      }
    },
    {
      path: '/settle',
      name: 'Settle',
      component: settle,
      meta: {
        title: '买单'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: personal,
      meta: {
        title: '个人中心'
      }
    }
  ]
})
