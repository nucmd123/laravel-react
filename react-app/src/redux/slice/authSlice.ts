import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import User from '@/interfaces/User'

export type AuthState = {
    isLogged?: boolean
    user?: User | null
}

const initialState: AuthState = {
    isLogged: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuthLogin: (state, action: PayloadAction<{ user: User }>) => {
            state.isLogged = true
            state.user = action.payload.user
        },
        setAuthLogout: state => {
            state.isLogged = false
            state.user = null
        },
    },
})

export const { setAuthLogin, setAuthLogout } = authSlice.actions
export const authReducer = authSlice.reducer
