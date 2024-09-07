import { toast } from 'react-toastify'
import { ToastType } from '../contexts/Toast/toastContext'

export default function showNotification(
    message: string,
    type: ToastType,
    setMessage: (message: string, type: ToastType) => void,
) {
    if (message && type) {
        toast[type](message)
        setMessage('', null)
    }
}
