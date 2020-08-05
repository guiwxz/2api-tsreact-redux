import { applyMiddleware, Store, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'


import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;