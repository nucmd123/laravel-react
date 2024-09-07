import { useEffect } from 'react'
import useToast from '../contexts/Toast/useToast'
import showNotification from '../helpers/showNotification'

export const Dashboard = () => {
    const { message, type, setMessage } = useToast()
    useEffect(() => {
        if (message && type) showNotification(message, type, setMessage)
    }, [message, type, setMessage])

    return <div>Dashboard</div>
}
