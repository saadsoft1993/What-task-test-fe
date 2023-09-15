import { request } from 'utils/request'
import CONFIG from 'app/config/'

export interface LoginPayload {
    email: string
    password: string
}

export const login = (payload: LoginPayload) => request(`${CONFIG.serverUrl}/api/v1/authenticate/`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
})

export const getVideos = (accessToken: string) => request(`${CONFIG.serverUrl}/api/v1/videos`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
})