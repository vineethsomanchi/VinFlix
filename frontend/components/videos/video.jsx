import React from "react";
import { Link } from "react-router-dom";

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = { volume: 1 }
        this.volumeToggle = this.volumeToggle.bind(this)
    }

    volumeToggle() {

        let featured = document.getElementById('featured')
        if (featured.muted) {
            featured.muted = false;
            this.setState({ volume: 1 });
        } else {
            featured.muted = true;
            this.setState({ volume: 0 });
        }
    }

    render () {

        let chooseButton;
        if (this.state.volume === 0) {
            chooseButton = <i className="fas fa-volume-up fa-1x"></i>
        } else if (this.state.volume === 1) {
            chooseButton = <i className="fas fa-volume-mute fa-1x"></i>
        }

        // let themes = [];
        // if(this.props.video.themes) {
        //     themes = this.props.video.themes.split(" ");
        // }
        
        return (

            <div className={this.props.vidNum}>
                {/* <video id="video" className="individual-video" loop autoPlay>
                    <source src={this.props.video.video_link} type="video/mp4" />
                </video>

                <div className="left-video-container">
                    <div className="video-play-button-container"><i class="fas fa-play fa-1x"></i></div>
                    
                    <div className="title">{this.props.video.title}</div>

                    <div className= "video-row-1">
                        <div className="video-maturity-rating">{this.props.video.maturity_rating}</div>
                        <div className="video-runtime">{this.props.video.title.runtime}</div>
                    </div>

                    <div className="video-themes"></div>
                    
                </div> */}
            </div>
        )
    }
}

export default Video