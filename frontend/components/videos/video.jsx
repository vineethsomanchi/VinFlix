import React from "react";
import { Link } from "react-router-dom";

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = { top: false, volume: 1 }
        this.videoToggle = this.videoToggle.bind(this)
        this.volumeToggle = this.volumeToggle.bind(this)
    }

    componentDidMount() {
        document.getElementById(this.props.video.id).load()
    }

    videoToggle() {
        let video = document.getElementById(this.props.video.id)
        if(video.paused) {
            video.play()
        } else {
            video.pause()
            video.load()
        }
    }
        
    volumeToggle() {

        let videoVol = document.getElementById(this.props.video.id)
        if (videoVol.muted) {
            videoVol.muted = false;
            this.setState({ volume: 1 });
        } else {
            videoVol.muted = true;
            this.setState({ volume: 0 });
        }
    }



    render () {

        let chooseButton;
        if (this.state.volume === 0) {
            chooseButton = <i className="fas fa-volume-up fa-xs"></i>
        } else if (this.state.volume === 1) {
            chooseButton = <i className="fas fa-volume-mute fa-xs"></i>
        }

        
        return (

            

            <div className={this.props.vidNum} >
                <video id={this.props.video.id} className="individual-video" 
                    src={this.props.video.video_link} poster={this.props.video.image_link}
                    onMouseOver={this.videoToggle} onMouseOut={this.videoToggle} loop >
                </video>

                <img src={window.logo} className="video-logo" />

                <div className="top-video-container">

                    <div className="left-video-container">
                        <div className="video-play-button-container"><i className="fas fa-play fa-xs"></i></div>
                        
                        <div className="video-title">{this.props.video.title}</div>

                        <div className= "video-row-1">
                            <h3 className="video-maturity-rating">{this.props.video.maturity_rating}</h3>
                            <h3 className="video-runtime">{this.props.video.runtime}</h3>
                        </div>

                    </div>

                    <div className="right-video-container">
                        <div className="video-button-container" onClick={this.volumeToggle}>{chooseButton}</div>
                        <div className="video-button-container"><i className="far fa-thumbs-up fa-xs"></i></div>
                        <div className="video-button-container"><i className="far fa-thumbs-down fa-xs"></i></div>
                    <div className="video-button-container"><i className="fas fa-plus fa-xs"></i></div>
                    </div>
                </div>

                <div className="video-dropdown">

                </div>
            </div> 
        )
    }
}

export default Video