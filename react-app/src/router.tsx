import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { UserPage } from './pages/User'
import { Dashboard } from './pages/Dashboard'
import Layout from './components/Layout'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'user',
                element: <UserPage />,
            },
        ],
    },
])

export default router
