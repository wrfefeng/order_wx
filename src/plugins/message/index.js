/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/26
 * Time: 9:42
 */
import MessageComponent from './main'
// import Vue from 'vue'
export default {
  install (Vue, options) {
    // 创建"子类"方便挂载
    const VueMessage = Vue.extend(MessageComponent)
    let message = new VueMessage()
    message.$mount()
    document.body.appendChild(message.$el)
    message.show = false
    message.text = ''
    // loding.show = false
    let $message = {
      showHandle (text) {
        message.show = true
        message.text = text
        setTimeout(() => {
          message.show = false
        }, 2000)
      },
      hide () {
        this.show = false
      }
    }
    Vue.message = Vue.prototype.$message = $message
  }
}
