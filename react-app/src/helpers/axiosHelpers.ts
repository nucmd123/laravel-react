import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

type TErrorData = { error: string }

const handleAxiosError = (error: AxiosError) => {
    const errorData: TErrorData = error.response?.data as TErrorData
    if (error.response?.status === 401) {
        toast.error(errorData.error)
    }
    toast.error(`Status: ${error.response?.status}, lỗi không xác định`)
}
export default handleAxiosError
