import { Reducer } from 'redux'
import actions from './actions'

export interface Repository {
    name: String
}

export interface RepositoryState {
    data: Repository[],
    loading: boolean,
    error: boolean,
}

const INITIAL_STATE = {
    data: [],
    loading: false, 
    error: false,
}

const GitReducer: Reducer<RepositoryState> = (state = INITIAL_STATE, action: any) => {
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

export default GitReducer;