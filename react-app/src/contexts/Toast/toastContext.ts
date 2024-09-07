import { createContext } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | null
export type ToastContextType = {
    message: string
    type: ToastType
    setMessage: (message: string, type: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)
export default ToastContext
