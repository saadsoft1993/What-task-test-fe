import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { getVideos, updateVideoRating, UpdateRatingPayload } from 'app/api'

export const getVideosAction: any = createAsyncThunk('getVideos', async (search: string) => {
    const response = await getVideos(search);
    return response;
})

export const updateVideoRatingAction: any = createAsyncThunk('updateVideoRating', async (payload: UpdateRatingPayload, { dispatch }) => {
    const response = await updateVideoRating(payload);
    dispatch(getVideosAction())
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
    updatig: boolean
    videos: Video[]
}

const initialState: VideosState = {
    loading: false,
    updatig: false,
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
        },
        [updateVideoRatingAction.pending]: state => {
            state.updatig = true
        },
        [updateVideoRatingAction.fulfilled]: (state, action) => {
            state.updatig = false
        },
        [updateVideoRatingAction.rejected]: state => {
            state.updatig = false
        }
    },
})


export default videosSlice.reducer