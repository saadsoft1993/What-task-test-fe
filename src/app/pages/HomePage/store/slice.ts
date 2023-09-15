import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { getVideos } from 'app/api'

export const getVideosAction: any = createAsyncThunk('getVideos', async (param: string) => {
    const response = await getVideos(param);
    return response;
})

export interface Video {
    average_rating: number
    id: string
    name: string
    tags: string[]
    url: string
}

export interface VideosState {
    loading: boolean
    videos: Video[]
}

const initialState: VideosState = {
    loading: false,
    videos: []
}

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {},
    extraReducers: {
        [getVideosAction.pending]: state => {
            state.loading = true
        },
        [getVideosAction.fulfilled]: (state, action) => {
            state.loading = false
            state.videos = action.payload.results
        },
        [getVideosAction.rejected]: state => {
            state.loading = false
        }
    },
})


export default videosSlice.reducer