/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/25
 * Time: 17:24
 */
const config = {
  timeout: 5 * 1000,
  baseURL: process.env.NODE_ENV === 'development' ? 'http://114.116.25.246:8000' : 'http://114.116.25.246:8000',
  deviantHandle: function (params) {
    if (params.message === 'Network params') {
      params.message = '网络错误，请重试'
    } else if (params.message.indexOf('timeout') >= 0) {
      params.message = '请求超时，青重试'
    } else {
      switch (params.response.status) {
        case 500:
          params.message = '服务器错误'
          break
        case 400:
          params.message = params.response.data.data
          break
        case 401:
          params.message = '未登录'
          break
        case 403:
          params.message = '请求被拒绝'
          break
        case 404:
          params.message = '资源未找到'
          break
        case 405:
          params.message = '请求方法不被允许'
          break
        case 415:
          params.message = '媒体类型错误'
          break
        default:
          params.message = '位置错误'
      }
    }
    return params
  }
}

export default config
