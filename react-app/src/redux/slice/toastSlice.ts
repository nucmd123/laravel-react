import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ToastType = 'success' | 'error' | 'warning' | null

export interface ToastState {
    type: ToastType
    message: string
}

const initialState: ToastState = {
    message: '',
    type: null,
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToast: (state, action: PayloadAction<ToastState>) => {
            state.type = action.payload.type
            state.message = action.payload.message
        },
        clearToast: state => {
            state.type = null
            state.message = ''
        },
    },
})

// Action creators are generated for each case reducer function
export const { clearToast, setToast } = toastSlice.actions

export const toastReducer = toastSlice.reducer
