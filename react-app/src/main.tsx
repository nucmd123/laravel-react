import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { Provider as ReactReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { store } from './redux/store'
import router from './router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReactReduxProvider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </ReactReduxProvider>
    </StrictMode>,
)
