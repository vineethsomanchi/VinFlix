import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav/nav_container'
import FeaturedVideo from './featured_video'
import VideoRow from './video_row'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if(this.props.videos.length === 0) return null;
        
        const setOne = []
        const setTwo = []
        const setThree = []
        const setFour = []

        
        for(let i = 0; i < this.props.videos.length; i++) {
            if(i < 5) {
                setOne.push(this.props.videos[i])
            } else if(i < 10) {
                setTwo.push(this.props.videos[i])
            } else if(i < 15) {
                setThree.push(this.props.videos[i])
            } else {
                setFour.push(this.props.videos[i])
            }
        }


        return (
            <div className="video-index-container">
                <NavBar/>
                <FeaturedVideo video={this.props.videos[0]} />
                <VideoRow videos={setOne} header="Superheroes"/>
                <VideoRow videos={setTwo} header="Anime"/>
                <VideoRow videos={setThree} header="Because you watched Quentin Tarantino" />
                <VideoRow videos={setFour} header="Leonardo DiCaprio"/>
                {/* <VideoRow videos={this.props.videos} header="Comedies"/> */}
            </div>


        )
    }
}

export default VideoIndex;

