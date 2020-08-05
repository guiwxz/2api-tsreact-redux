import { combineReducers } from 'redux';

import GitReducer from './github/reducer'
import YtReducer from './youtube/reducer'

export default combineReducers({
    GitReducer,
    YtReducer
})