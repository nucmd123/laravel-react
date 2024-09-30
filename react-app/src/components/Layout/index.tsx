import { clearToast } from '@/redux/slice/toastSlice'
import { RootState } from '@/redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setAuthLogin } from '@/redux/slice/authSlice'
import { fetchUser } from '@/services/authService'

const Layout: React.FC = () => {
    const dispatch = useDispatch()
    const toastState = useSelector((state: RootState) => state.toast)
    const authState = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (toastState.type && toastState.message) {
            toast[toastState.type](toastState.message)
            dispatch(clearToast())
        }
    }, [toastState.type, toastState.message, dispatch])

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <p>Đây là trang lây ao tổng</p>
            <Outlet />
        </div>
    )
}

export default Layout
