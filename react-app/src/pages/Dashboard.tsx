import { clearToast } from '@/redux/slice/toastSlice'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const Dashboard = () => {
    const dispatch = useDispatch()
    const toastState = useSelector((state: RootState) => state.toast)

    useEffect(() => {
        if (toastState.type && toastState.message) {
            toast[toastState.type](toastState.message)
            dispatch(clearToast())
        }
    }, [toastState.type, toastState.message, dispatch])

    return <div>Dashboard</div>
}
