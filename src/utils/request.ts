import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

// axios 配置
axios.defaults.timeout = 30000
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.withCredentials = true // 允许跨域携带cookie

// http request 拦截器
axios.interceptors.request.use(
    (config) => {
        // 处理逻辑  token 等等
        // config.headers.Authorization = store.state.token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            // 无效的 token
        }
        return Promise.reject(error)
    }
)

export default axios
