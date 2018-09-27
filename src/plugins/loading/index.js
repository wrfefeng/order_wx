/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/27
 * Time: 14:55
 */
import LoadingComponent from './main'

export default {
  install (Vue, options) {
    const VueLoading = Vue.extend(LoadingComponent)
    let loading = new VueLoading()
    loading.$mount()
    document.body.appendChild(message.$el)
    loading.show = false
    loading.text = ''
    let $loading = {
      open (text) {
        loading.show = true
        loading.text = text
      },
      close () {
        loading.show = false
        loading.text = ''
      }
    }
    Vue.loading = Vue.prototype.$loading = $loading
  }
}
