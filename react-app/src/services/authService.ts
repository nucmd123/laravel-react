import axiosInstance from '@/configs/axiosConfig'

// login
export type TLoginPayload = {
    email: string
    password: string
}
export const loginService = async (payload: TLoginPayload) => {
    const res = await axiosInstance.post('auth/login', payload)

    return res
}

// logout
export const logoutService = () => {}
