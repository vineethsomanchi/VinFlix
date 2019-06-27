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
        this.props.fetchListItems();
    }

    render() {
        if(this.props.videos.length === 0) return null;
        
        const setOne = []
        const setTwo = []
        const setThree = []
        const setFour = []

        
        for(let i = 0; i < this.props.videos.length; i++) {
            if(i < 6) {
                setOne.push(this.props.videos[i])
            } else if(i > 5 && i < 12) {
                setTwo.push(this.props.videos[i])
            } else if(i > 11 && i < 18) {
                setThree.push(this.props.videos[i])
            } else if (i > 17 && i < 24) {
                setFour.push(this.props.videos[i])
            }
        } 
        return (
            <>
                <NavBar/>
                <FeaturedVideo video={this.props.videos[5]} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                <div className="video-row-main">
                    <VideoRow rowNum="r1" videos={setOne} header="Comics" createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <VideoRow rowNum="r2" videos={setTwo} header="Animated" createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <VideoRow rowNum="r3" videos={setThree} header="Because you watched Quentin Tarantino" createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <VideoRow rowNum="r4" videos={setFour} header="Leonardo DiCaprio" createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                </div>
            </>


        )
    }
}

export default VideoIndex;

