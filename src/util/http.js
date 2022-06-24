import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { message } from 'ant-design-vue'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const resError = (status) => {
    const msg = {
        '400': '请求错误(400)',
        '401': '未授权，请重新登录(401)',
        '403': '拒绝访问(403)',
        '404': '请求出错(404)',
        '408': '请求超时(408)',
        '500': '服务器错误(500)',
        '501': '服务未实现(501)',
        '502': '网络错误(502)',
        '503': '服务不可用(503)',
        '504': '网络超时(504)',
        '505': 'HTTP版本不受支持(505)'
    }
    const errorMsg = msg[status] || `连接出错(${status})!`
    const err = new Error(status)
    err.code = status
    err.msg = `${errorMsg}`
    message.error({content: err.msg })
    return err
}

// const baseURL = 'http://123.57.26.161:5210';
// const baseURL = 'http://123.57.26.161:5200/api/';
const baseURL = 'http://127.0.0.1:9999/';
// const baseURL = 'http://127.0.0.1:5250';

export const service = axios.create({
    baseURL: baseURL,
    timeout: 30000
})

// 图片上传用
// export const uploadAction = baseURL + uploadUrl

// 请求拦截器
service.interceptors.request.use((config) => {
    NProgress.start()
    // if (sessionStorage.token) config.headers.token = sessionStorage.token
    // if (sessionStorage.token)
    // config.headers.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjE0MzU3Mzc4MDA3NDM3MzEyIn0.9h8QR05gfTWDmrthaxslMfReD91bHzCGwkStvocgryI'
    return config
}, (error) => {
    NProgress.done()
    // 错误抛到业务代码
    error.msg = '服务器异常，请联系管理员！'
    message.error({content: error.msg })
    throw error
})

// 响应拦截器
service.interceptors.response.use((response) => {
    const resData = response.data
    NProgress.done()
    if (response.data) {
        if (resData.errorCode < 200 || resData.errorCode >= 300) {
            // 处理http错误，抛到业务代码
            const err = new Error(resData.status)
            err.code = resData.status
            err.msg = `${resData.msg}`
            message.error({content: err.msg })
            throw err
        }
        return resData.data
    } else {
        return null
    }
}, (error) => {
    NProgress.done()
    // 错误抛到业务代码
    if (error.response && error.response.status) {
        const status = error.response.status
        throw resError(status)
    } else {
        error.msg = '请求超时或服务器异常！'
        message.error({content: error.msg })
        throw error
    }
})
