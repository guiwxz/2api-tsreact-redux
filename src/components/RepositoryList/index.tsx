import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import loadrequestActions from '../../store/redux/github/actions'

import { RepositoryState } from '../../store/redux/github/reducer'

const { loadrequest } = loadrequestActions

interface IProps {
    state: RepositoryState,
    loadrequest(): void
}

const RepositoryList: React.FC<IProps> = ({ state, loadrequest }) => {
    const { data, error, loading } = state;

    useEffect(() => {
        loadrequest()
    }, [loadrequest])

    console.log(data);

    return (
        <div>
            {data.map((item)=>(
                <p>{item.name}</p>
            ))}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    state: state.GitReducer,
})

export default connect(mapStateToProps, { loadrequest } )(RepositoryList)