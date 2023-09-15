import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { login as loginRequest, LoginPayload } from 'app/api'

export const loginAction: any = createAsyncThunk('login', async (param: LoginPayload) => {
    debugger
    const response = await loginRequest(param);
    return response;
})

export interface LoginState {
    loading: boolean
    isLoggedIn: boolean
}

const initialState: LoginState = {
    loading: false,
    isLoggedIn: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: () => { }
    },
    extraReducers: {
        [loginAction.pending]: (state) => {
            state.loading = true
        },
        [loginAction.fulfilled]: (state, action) => {
            state.loading = false
        },
        [loginAction.rejected]: (state, action) => {
            state.loading = false
        }
    },
})

// Action creators are generated for each case reducer function
// export const { login } = loginSlice.actions

export default loginSlice.reducer