import { Reducer } from 'redux'
import actions from './actions'

export interface Video {
    name: String
}

export interface VideoState {
    data: Video[],
    loading: boolean,
    error: boolean,
}

const INITIAL_STATE = {
    data: [],
    loading: false, 
    error: false,
}

const YtReducer: Reducer<VideoState> = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case actions.LOAD_REQUEST:
            return { ...state, loading: true }

        case actions.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }

        case actions.LOAD_FAILURE:
            return { ...state, loading: false, data: [], error: true }

        default:
            return { ...state }
    }   
}

export default YtReducer;