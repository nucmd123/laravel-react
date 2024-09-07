import { ReactNode, useState } from 'react'
import ToastContext, { TToastMessageType } from './toastContext'

type Props = { children: ReactNode }
function ToastProvider({ children }: Props): React.JSX.Element {
    const [message, setMessage] = useState<string>('')
    const [messageType, setmessageType] = useState<TToastMessageType>('success')
    return (
        <ToastContext.Provider
            value={{ message, setMessage, messageType, setmessageType }}
        >
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider
