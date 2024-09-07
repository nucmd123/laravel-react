import { ReactNode, useState } from 'react'
import ToastContext, { ToastType } from './toastContext'

type Props = { children: ReactNode }
function ToastProvider({ children }: Props): React.JSX.Element {
    const [toast, setToast] = useState<{ message: string; type: ToastType }>({
        message: '',
        type: null,
    })
    const setMessage = (message: string, type: ToastType = null) => {
        setToast({ message, type })
    }
    return (
        <ToastContext.Provider value={{ ...toast, setMessage }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider
