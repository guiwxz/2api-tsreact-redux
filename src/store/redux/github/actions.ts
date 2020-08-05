import { Repository } from  './reducer'

const actions = {
        LOAD_REQUEST: 'LOAD_REQUEST',
        LOAD_SUCCESS: 'LOAD_SUCCESS',
        LOAD_FAILURE: 'LOAD_FAILURE',

        loadrequest: () => ({
            type: actions.LOAD_REQUEST
        }),

        loadsuccess: (payload: Repository) => ({
            type: actions.LOAD_SUCCESS,
            payload
        }),

        loadfailure: (payload: String) => ({
            type: actions.LOAD_FAILURE,
            payload
        })

}

export default actions;