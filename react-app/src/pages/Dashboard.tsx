import { useEffect } from 'react'
import useToast from '../contexts/Toast/useToast'
import { toast } from 'react-toastify'

export const Dashboard = () => {
    const { message, setMessage, messageType } = useToast()

    useEffect(() => {
        if (message) {
            toast[messageType](message)
            setMessage('')
        }
    }, [message, setMessage, messageType])

    return <div>Dashboard</div>
}
