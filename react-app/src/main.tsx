import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { UserPage } from './pages/UserPage'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './pages/Dashboard'

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
        path: '/admin',
        element: <Dashboard />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
