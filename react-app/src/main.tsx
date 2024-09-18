import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { Provider as ReactReduxProvider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { UserPage } from './pages/User'
import { LoginPage } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css'
import { store } from './redux/store'

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <LoginPage />,
    },
    {
        path: '/user',
        element: <UserPage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReactReduxProvider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </ReactReduxProvider>
    </StrictMode>,
)
