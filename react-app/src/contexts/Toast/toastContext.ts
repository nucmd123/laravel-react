import { createContext } from 'react'

export type TToastMessageType = 'success' | 'error' | 'warning'
export type TToastContext = {
    message: string
    setMessage: (message: string) => void
    messageType: TToastMessageType
    setmessageType: (type: TToastMessageType) => void
}

const ToastContext = createContext<TToastContext | undefined>(undefined)
export default ToastContext
