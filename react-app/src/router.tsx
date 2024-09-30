import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/Login'
import UserPage from './pages/User'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import AuthMiddleware from './middleware/AuthMiddleware'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: (
            <AuthMiddleware>
                <Layout />
            </AuthMiddleware>
        ),
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
