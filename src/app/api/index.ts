import { request } from 'utils/request'
import CONFIG from 'app/config/'
import axios from 'axios'

export interface LoginPayload {
    email: string
    password: string
}

export const login = (payload: LoginPayload) => axios.post(`${CONFIG.serverUrl}/api/v1/authenticate`, payload)

// export const login = (payload: LoginPayload) => request(`${CONFIG.serverUrl}/api/v1/authenticate`, {
//     method: 'POST',
//     body: JSON.stringify(payload)
// })