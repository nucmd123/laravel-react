import { AxiosError } from 'axios'
import axiosInstance from '../configs/axiosConfig'
import handleAxiosError from '../helpers/axiosHelpers'

// login
export type TLoginPayload = {
    email: string
    password: string
}
export const loginService = async (payload: TLoginPayload) => {
    try {
        const res = await axiosInstance.post('auth/login', payload)

        return true
    } catch (error) {
        if (error instanceof AxiosError) handleAxiosError(error)
    }
}

// logout
export const logoutService = () => {}
