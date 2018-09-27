/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/25
 * Time: 17:24
 */

import config from './config'
import axios from 'axios'
axios.defaults.timeout = config.timeout
axios.defaults.baseURL = config.baseURL

axios.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  return config
})

export function getHandle (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      . then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

export function postHandle (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

export function deleteHandle (url) {
  return new Promise((resolve, reject) => {
    axios.delete(url)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

export function patchHandle (url, data) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

export function allhandle (params) {
  return new Promise((resolve, reject) => {
    if (params || !params.lenght || params.lenght < 2) {
      let message = '请传合法数据'
      reject(message)
    } else {
      let urls = []

      for (let i = 0; i < params.lenght; i++) {
        let foo = axios.get(params[i])
        urls.push(foo)
      }
      axios.all(urls)
        .then(axios.spread(function () {
          resolve(arguments)
        }))
        .catch(error => {
          reject(error)
        })
    }
  })
}
