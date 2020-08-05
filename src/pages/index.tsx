import React from 'react';
import RepositoryList from '../components/RepositoryList'
import VideoList from '../components/VideosList'

const Home: React.FC = () => (
    <>
        <RepositoryList />
        <VideoList />
    </>
)

export default Home;