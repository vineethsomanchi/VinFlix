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
            if(i <= 5) {
                setOne.push(this.props.videos[i])
            } else if(i >= 5 && i <= 11) {
                setTwo.push(this.props.videos[i])
            } else if(i >= 10 && i <= 17) {
                setThree.push(this.props.videos[i])
            }
        } 

        return (
            <>
                <NavBar/>
                <FeaturedVideo video={this.props.videos[0]} />
                <div className="video-row-main">
                    <VideoRow rowNum="r1 individual-row" videos={setOne} header="Superheroes" />
                    {/* <VideoRow rowNum="r2 individual-row" videos={setTwo} header="Anime"/>
                    <VideoRow rowNum="r3 individual-row" videos={setThree} header="Because you watched Quentin Tarantino" /> */}
                    {/* <VideoRow videos={setFour} header="Leonardo DiCaprio"/> */}
                    {/* <VideoRow videos={this.props.videos} header="Comedies"/> */}
                </div>
            </>


        )
    }
}

export default VideoIndex;

