import { all } from 'redux-saga/effects';

import { gitload } from './github/saga'
import { ytload } from './youtube/saga'

export default function* rootSaga(){
    yield all([
        gitload(),
        ytload()
    ])
}