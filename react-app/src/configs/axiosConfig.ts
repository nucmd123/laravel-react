import axios from 'axios'
import headers from './headers'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    headers: {
        'Content-Type': headers['Content-Type']['application/json'],
    },
    withCredentials: true,
})
axiosInstance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    },
)
axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const { response } = error
        if (response.status === 401) {
            // call refresh token
        }
        return Promise.reject(error)
    },
)
export default axiosInstance
