import axios from 'axios'
import { api_prefix } from '~/lib/config'


axios.defaults.baseURL = api_prefix
axios.defaults.timeout = 5000

// http请求拦截器
axios.interceptors.request.use(config => {
  // console.log(22, config)

  return config
}, error => {
  message.error('请求服务器超时')
  return error
})


// http响应拦截器
// axios.interceptors.response.use(data => {
//   if (!data || typeof data.data !== 'object') {
//     message.error('服务器响应格式错误')
//     return false
//   }
//   const result = data.data

//   if (result.errno !== 0) {
//     message.error(result.errmsg)
//     errAction[result.errno]()
//     return false // 错误码统一返回false，在这里统一处理，页面不对其处理
//   }
//   return result
// }, error => {
//   console.log('error', error)
//   message.error('服务器响应错误')
//   return Promise.reject(error)
// })
export default axios
