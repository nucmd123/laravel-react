import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <div>
            <p>Đây là trang lây ao tổng</p>
            <Outlet />
        </div>
    )
}

export default Layout
