import axiosInstance from '../configs/axiosConfig'

// login
export type TLoginPayload = {
    email: string
    password: string
}
export const loginService = async (payload: TLoginPayload) => {
    try {
        const res = await axiosInstance.post('login')
    } catch (error) {
        console.log(error)
    }
}

// logout
export const logoutService = () => {}
