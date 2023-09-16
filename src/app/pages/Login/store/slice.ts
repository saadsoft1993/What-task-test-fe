import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { login as loginRequest, LoginPayload } from 'app/api'

export const loginAction: any = createAsyncThunk('login', async (param: LoginPayload) => {
    const response = await loginRequest(param);
    return response;
})

export interface LoginState {
    loading: boolean
    accessToken: string
    hasError: boolean
    email: string
}

const initialState: LoginState = {
    loading: false,
    accessToken: '',
    hasError: false,
    email: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: () => initialState,
        clearError: state => {
            state.hasError = false
        }
    },
    extraReducers: {
        [loginAction.pending]: state => {
            state.loading = true
            state.hasError = false
        },
        [loginAction.fulfilled]: (state, action) => {
            state.loading = false
            state.hasError = false
            state.email = action.payload.email
            state.accessToken = action.payload.access
            localStorage.setItem('accessToken', action.payload.access)
        },
        [loginAction.rejected]: (state) => {
            state.loading = false
            state.hasError = true
        }
    },
})

// Action creators are generated for each case reducer function
export const { logout, clearError } = loginSlice.actions

export default loginSlice.reducer