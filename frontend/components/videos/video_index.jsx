import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav/nav_container'

class VideoIndex extends React.Component {
    render() {
        return (
            <div className="video-index-container">
                <NavBar/>
            </div>
        )
    }
}

export default VideoIndex;