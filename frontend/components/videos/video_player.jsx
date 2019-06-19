import React from 'react';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //Fetch video and set state
        this.props.fetchVideo(this.props.match.params.videoId)

        const backButton = document.getElementById("back-arrow-icon");
        const backButtonText = document.getElementById("back-arrow-text");
        const backButtonContainer = document.getElementById("video-player-back-arrow-container");
        backButton.addEventListener("mouseover", () => {
            backButtonText.style.opacity = "1.0";
            backButton.style.fontSize = "2.2em";
        })

        backButton.addEventListener("mouseout", () => {
            backButtonText.style.opacity = "0.0";
            backButton.style.fontSize = "1.8em";
        })

        backButtonText.addEventListener("mouseover", () => {
            backButtonText.style.opacity = "1.0";
            backButton.style.fontSize = "2.2em";
        })

        backButtonText.addEventListener("mouseout", () => {
            backButtonText.style.opacity = "0.0";
            backButton.style.fontSize = "1.8em";
        })
        
        backButtonContainer.addEventListener("mouseover", () => {
            backButtonText.style.opacity = "1.0";
            backButton.style.fontSize = "2.2em";
        })

        backButtonContainer.addEventListener("mouseout", () => {
            backButtonText.style.opacity = "0.0";
            backButton.style.fontSize = "1.8em";
        })

    }

    render() {

        const videoPlayerLink = (this.props.video ? this.props.video.video_link : null)
        return (
            <div className="video-player-container">
                <video id="video-player" className="video-player" src={videoPlayerLink} controls loop autoPlay ></video>
                
                <div id="video-player-back-arrow-container" className="video-player-back-arrow-container">
                    <i className="fas fa-arrow-left fa-2x" id="back-arrow-icon"></i>
                    <h1 id="back-arrow-text" className="back-arrow-text">Back to Browse</h1>
                </div>
            </div>


        )
    }
}

export default VideoPlayer;

