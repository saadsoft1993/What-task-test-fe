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
}

const initialState: LoginState = {
    loading: false,
    accessToken: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: {
        [loginAction.pending]: state => {
            state.loading = true
        },
        [loginAction.fulfilled]: (state, action) => {
            state.loading = false
            state.accessToken = action.payload.access
            localStorage.setItem('accessToken', action.payload.access)
        },
        [loginAction.rejected]: state => {
            state.loading = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { logout } = loginSlice.actions

export default loginSlice.reducer