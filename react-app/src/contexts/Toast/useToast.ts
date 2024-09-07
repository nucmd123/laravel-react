import { useContext } from 'react'
import ToastContext, { ToastContextType } from './toastContext'

const useToast = (): ToastContextType => {
    const context = useContext(ToastContext)
    if (!context) throw new Error(`Toast context is not defind`)
    return context
}
export default useToast
