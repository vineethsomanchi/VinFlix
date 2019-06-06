import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav/nav_container'
import FeaturedVideo from './featured_video'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if(this.props.videos.length === 0) return null;
        return (
            <div className="video-index-container">
                <NavBar/>
                <FeaturedVideo video={this.props.videos[0]} />
                <div className="temp">Yoo</div>
            </div>


        )
    }
}

export default VideoIndex;