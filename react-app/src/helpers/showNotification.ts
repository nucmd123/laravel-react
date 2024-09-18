import { toast } from 'react-toastify'
import { ToastType } from '../contexts/Toast/toastContext'

export const showToast = (message: string, type: ToastType) => {
    if (type && message) {
        toast[type](message)
    }
}
