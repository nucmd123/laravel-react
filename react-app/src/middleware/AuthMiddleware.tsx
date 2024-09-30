import { RootState } from '@/redux/store'
import React, { PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

type Props = PropsWithChildren

function AuthMiddleware({ children }: Props) {
    // const navigate = useNavigate()
    // const { isLogged, user } = useSelector((state: RootState) => state.auth)

    // useEffect(() => {
    //     console.log(isLogged, user)
    //     if (!isLogged || !user) navigate('/admin')
    // }, [isLogged, user, navigate])

    // return isLogged && user && children
    return children
}

export default AuthMiddleware
