import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

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
    }
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer