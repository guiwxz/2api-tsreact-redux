import actions from './actions';
import { put, call, takeLatest } from 'redux-saga/effects'
import * as api from '../../api';

export function* gitload(){
    yield takeLatest(actions.LOAD_REQUEST, function*(){

        try{
            const response = yield call(api.getRepository, 'guiwxz');

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