/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/27
 * Time: 21:42
 */

import NoticeComponent from './main'

export default {
  install (Vue, options) {
    const VueNotice = Vue.extend(NoticeComponent)
    let notice = new VueNotice()
    notice.$mount()
    document.body.appendChild(notice.$el)
    notice.show = false
    notice.info = ''
    let $notice = {
      showHandle (info) {
        notice.info = info
        notice.show = true
        setTimeout(() => {
          notice.show = false
          notice.info = ''
        }, 1500)
      }
    }
    Vue.notice = Vue.prototype.$notice = $notice
  }
}
