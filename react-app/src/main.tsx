import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { UserPage } from './pages/UserPage'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ToastProvider from './contexts/Toast/toastProvider'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <LoginPage />,
    },
    {
        path: '/users',
        element: <UserPage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </ToastProvider>
    </StrictMode>,
)
