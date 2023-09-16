import { request } from 'utils/request'
import CONFIG from 'app/config/'

export interface LoginPayload {
    email: string
    password: string
}

export interface UpdateRatingPayload {
    video: string
    rating: number
}

export const login = (payload: LoginPayload) => request(`${CONFIG.serverUrl}/api/v1/authenticate/`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})

export const getVideos = (search: string = '') => request(`${CONFIG.serverUrl}/api/v1/videos/?name=${search}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export const updateVideoRating = (payload: UpdateRatingPayload) => request(`${CONFIG.serverUrl}/api/v1/video_rating/`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})