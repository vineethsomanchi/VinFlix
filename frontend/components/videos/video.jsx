import React from "react";
import { Link } from "react-router-dom";

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = { volume: 1, zoom: false, play: false, exception: false }
        this.videoToggle = this.videoToggle.bind(this);
        this.volumeToggle = this.volumeToggle.bind(this);
        this.videoZoom = this.videoZoom.bind(this);
    }   

    videoZoom() {
        const vidContainer = document.getElementById(`${this.props.rowNum} ${this.props.vidNum}`);
        const vidElements = document.getElementById(`top-video-container ${this.props.rowNum} ${this.props.vidNum}`);
        if(this.state.zoom === false) {
            this.setState({ zoom: true })
            this.zoomTimer = setTimeout(() => {
                vidContainer.style.width = "36.6vw"
                vidContainer.style.height = "37.4vh"
                if (this.props.smallRotate) {
                    this.props.smallRotate();
                } else if (this.props.mediumRotate) {
                    this.props.mediumRotate();
                }
                vidElements.style.visibility = "visible";
            }, 1000)
        } else {
            clearTimeout(this.zoomTimer)
            vidContainer.style.width = "18.9vw"
            vidContainer.style.height = "19.4vh"
            if (this.props.smallRotate) {
                this.props.smallRotate();
            } else if (this.props.mediumRotate) {
                this.props.mediumRotate();
            }
            vidElements.style.visibility = "hidden";
            this.setState({ zoom: false })
        }
    }

    videoToggle() {
        let video = document.getElementById(this.props.video.id)
        if(this.state.play === false) {
            this.setState({play: true})
            this.videoToggleTimer = setTimeout(() => {
                video.play()
            }, 1000)
        } else if(this.state.play === true) {
            this.setState({ play: false })
            clearTimeout(this.videoToggleTimer)
            video.pause()
            video.load()
        }
    }

    componentDidMount() {
        const actualVideo = document.getElementById(this.props.video.id);
        actualVideo.load()
        actualVideo.addEventListener("mouseover", this.videoZoom);
        actualVideo.addEventListener("mouseout", this.videoZoom);

        // const topVidContainer = document.getElementById(`top-video-container ${this.props.rowNum} ${this.props.vidNum}`);
        // const iTags = topVidContainer.querySelectorAll("i")
        // const that = this;
        // for(let i = 0; i < iTags.length; i++) {
        //     iTags[i].addEventListener("mouseover", () => {
        //         that.setState({exception: true})
        //     })
        // }

        actualVideo.addEventListener("mouseover", this.videoToggle);
        actualVideo.addEventListener("mouseout", this.videoToggle);

        
        
        // actualVideo.addEventListener("mouseover", this.props.accent);
        // actualVideo.addEventListener("mouseout", this.props.accent);
    }

    componentWillUnmount () {
        const actualVideo = document.getElementById(this.props.video.id);
        actualVideo.removeEventListener("mouseover", this.videoZoom);
        actualVideo.removeEventListener("mouseout", this.videoZoom);
        actualVideo.removeEventListener("mouseover", this.videoToggle);
        actualVideo.removeEventListener("mouseout", this.videoToggle);
        // actualVideo.removeEventListener("mouseover", this.props.accent);
        // actualVideo.removeEventListener("mouseout", this.props.accent);
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

        const inidividualVidLink = (this.props.video ? this.props.video.video_link : null);

        let chooseButton;
        if (this.state.volume === 0) {
            chooseButton = <i className="fas fa-volume-up fa-xs" id="vidicons"></i>
        } else if (this.state.volume === 1) {
            chooseButton = <i className="fas fa-volume-mute fa-xs" id="vidicons"></i>
        }

        const vidContainVar = `${this.props.rowNum} ${this.props.vidNum}`;
        const topVidContainVar = `top-video-container ${this.props.rowNum} ${this.props.vidNum}`;

        return (
            <div className="vid" id={vidContainVar}>
                <video id={this.props.video.id} className="individual-video" 
                    src={inidividualVidLink} poster={this.props.video.image_link} loop >
                </video> 
                <img src={window.logo} className="video-logo" />
                
                    <div className="top-video-container" id={topVidContainVar}>

                        <div className="left-video-container">
                            <div className="video-button-container" onClick={this.volumeToggle}>{chooseButton}</div>
                            <div className="video-button-container"><i className="far fa-thumbs-up fa-xs" id="vidicons"></i></div>
                            <div className="video-button-container"><i className="far fa-thumbs-down fa-xs" id="vidicons"></i></div>
                            <div className="video-button-container"><i className="fas fa-plus fa-xs" id="vidicons"></i></div>
                        </div>

                        <div className="right-video-container">  
                            <Link className="video-play-button-container" to={`/watch/${this.props.video.id}`}><div><i className="fas fa-play fa-xs" id="video-ele-play-button"></i></div></Link> 
                            <div className="video-title">{this.props.video.title}</div>
                            <div className= "video-row-1">
                                <h3 className="video-runtime">{this.props.video.runtime}</h3>
                                <h3 className="video-maturity-rating">{this.props.video.maturity_rating}</h3>
                            </div>
                        </div>
                    </div>

                <div className="bottom-video-container">
                </div>
            </div>
        )
    }
}

export default Video