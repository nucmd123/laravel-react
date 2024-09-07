import { useContext } from 'react'
import ToastContext, { TToastContext } from './toastContext'

const useToast = (): TToastContext => {
    const context = useContext(ToastContext)
    if (!context) throw new Error(`Toast context is not defind`)
    return context
}
export default useToast
