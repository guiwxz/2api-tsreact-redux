import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import loadrequestActions from '../../store/redux/youtube/actions'
import { VideoState } from '../../store/redux/youtube/reducer'

const { loadrequest } = loadrequestActions

interface IProps {
    state: VideoState,
    loadrequest(): void
}

const VideoList: React.FC<IProps> = ({ state, loadrequest }) => {
    const { data, error, loading } = state

    useEffect(()=>{
        loadrequest()
    }, [loadrequest])

    return(
        <div>
            {data.map((item)=>(
                <li>{item.name}</li>
            ))}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    state: state.YtReducer
})

export default connect(mapStateToProps, { loadrequest })(VideoList)