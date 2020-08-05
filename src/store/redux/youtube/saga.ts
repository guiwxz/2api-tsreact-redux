import actions from './actions';
import { put, call, takeLatest } from 'redux-saga/effects'
import * as api from '../../api';

const channelId = 'UCSfwM5u0Kce6Cce8_S72olg'

export function* ytload(){
    yield takeLatest(actions.LOAD_REQUEST, function*(){

        try{
            const response = yield call(api.getVideo, channelId);

            yield put({
                type: actions.LOAD_SUCCESS,
                payload: response
            })
        }
        catch(err){
            yield put({
                type: actions.LOAD_FAILURE,
                payload: err.message
            })
        }

    })
}