import React from "react";
import { Link } from "react-router-dom";

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = { volume: 1, zoom: false, myList: false }
        this.volumeToggle = this.volumeToggle.bind(this);
        this.videoZoom = this.videoZoom.bind(this);
        this.myListToggle = this.myListToggle.bind(this);
    }   

    videoZoom() {
        const vidContainer = document.getElementById(`${this.props.rowNum} ${this.props.vidNum}`);
        const vidElements = document.getElementById(`top-video-container ${this.props.rowNum} ${this.props.vidNum}`);
        const video = document.getElementById(this.props.video.id)
        if(this.state.zoom === false) {
            this.setState({ zoom: true })
            this.zoomTimer = setTimeout(() => {
                vidContainer.style.width = "36.6vw"
                vidContainer.style.height = "37.4vh"
                vidElements.style.visibility = "visible";
                video.play()
            }, 1400)
        } else {
            clearTimeout(this.zoomTimer)
            vidContainer.style.width = "18.9vw"
            vidContainer.style.height = "19.4vh"
            vidElements.style.visibility = "hidden";
            video.pause()
            video.load()
            this.setState({ zoom: false })
        }
    }

    myListToggle() {
        if(this.state.myList === true) {
            this.props.deleteListItem(this.props.video.id)
            this.setState({myList: false})
        } else {
            this.props.createListItem(this.props.video.id)
            this.setState({ myList: true })
        }
    }


    componentDidMount() {
        const vidContainer = document.getElementById(`${this.props.rowNum} ${this.props.vidNum}`) 
        vidContainer.addEventListener("mouseenter", this.videoZoom);
        vidContainer.addEventListener("mouseleave", this.videoZoom);
        for (let i = 0; i < this.props.lists.length; i++) {
            if (this.props.lists[i].id === this.props.video.id) {
                this.setState({ myList: true })
                break
            } else {
                this.setState({ myList: false })
            }
        }
        
    }

    componentWillUnmount () {
        const vidContainer = document.getElementById(`${this.props.rowNum} ${this.props.vidNum}`) 
        vidContainer.removeEventListener("mouseenter", this.videoZoom);
        vidContainer.removeEventListener("mouseleave", this.videoZoom);
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

        let chooseVButton;
        if (this.state.volume === 0) {
            chooseVButton = <i className="fas fa-volume-up fa-xs" id="vidicons"></i>
        } else if (this.state.volume === 1) {
            chooseVButton = <i className="fas fa-volume-mute fa-xs" id="vidicons"></i>
        }

        let chooseListButton;
        if (this.state.myList === true) { 
            chooseListButton = <i className="fas fa-check fa-xs" id="vidicons" onClick={this.myListToggle}></i>
        } else {
            chooseListButton = <i className="fas fa-plus fa-xs" id="vidicons" onClick={this.myListToggle}></i>
        }


        

        const vidContainVar = `${this.props.rowNum} ${this.props.vidNum}`;
        const topVidContainVar = `top-video-container ${this.props.rowNum} ${this.props.vidNum}`;
        


        return (
            <div className="vid" id={vidContainVar}>
                <video id={this.props.video.id} className="individual-video" 
                    src={inidividualVidLink} poster={this.props.video.image_link} loop>
                </video> 
                <img src={window.logo} className="video-logo" />
                
                    <div className="top-video-container" id={topVidContainVar}>

                        <div className="left-video-container">
                            <div className="video-button-container" onClick={this.volumeToggle}>{chooseVButton}</div>
                            <div className="video-button-container"><i className="far fa-thumbs-up fa-xs" id="vidicons"></i></div>
                            <div className="video-button-container"><i className="far fa-thumbs-down fa-xs" id="vidicons"></i></div>
                            <div className="video-button-container">{chooseListButton}</div>
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