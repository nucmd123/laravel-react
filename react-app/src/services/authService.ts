import axiosInstance from '@/configs/axiosConfig'
import User from '@/interfaces/User'

// login
export type LoginPayloadType = {
    email: string
    password: string
}
export type LoginResponse = {
    user: User
    access_token: string
    token_type: string
    expires_in: number
}
export const loginService = async (payload: LoginPayloadType) => {
    const res = await axiosInstance.post<LoginResponse>('auth/login', payload)
    return res.data
}

// logout
export const logoutService = () => {}

// refresh login
export const fetchUser = async () => {
    try {
        const res = await axiosInstance.get(`auth/me`)
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}
