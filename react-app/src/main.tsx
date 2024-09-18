import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { UserPage } from './pages/UserPage'
import { LoginPage } from './pages/LoginPage'
import { Dashboard } from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider as ReactReduxProvider } from 'react-redux'
import { store } from './redux/store'

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
        <ReactReduxProvider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </ReactReduxProvider>
    </StrictMode>,
)
