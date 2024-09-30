import { RootState } from '@/redux/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const { isLogged, user } = useSelector((state: RootState) => state.auth)

    return <div>Dashboard</div>
}

export default Dashboard
