import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            play: true,
            volume: 1,
            time: "00:00",
            seek: 0,
            duration: null
        };
        
        this.togglePlay = this.togglePlay.bind(this);
        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.toggleVolume = this.toggleVolume.bind(this);
        this.toggleSeek = this.toggleSeek.bind(this);
        this.updateSeek = this.updateSeek.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }

    
    componentDidMount() {

        this.seekCheck = setInterval(this.updateSeek, 1000);
        this.timeCheck = setInterval(this.updateTime, 1000);

        //Fetch video and set state
        this.props.fetchVideo(this.props.match.params.videoId)
        const videoPlayerNavigationContainer = document.getElementById("video-player-navigation-container");
        const idlePopup = document.getElementById("video-info-idle-popup");
        const idleRatingPopup = document.getElementById("video-rating-idle-popup")
        const backButton = document.getElementById("back-arrow-icon");
        const backButtonText = document.getElementById("back-arrow-text");
        const backButtonContainer = document.getElementById("video-player-back-arrow-container");
        const playButton = document.getElementById("nav-controls-play-button");
        const rewindButton = document.getElementById("reverse-button");
        const fastForwardButton = document.getElementById("forward-button");
        const volumeButton = document.getElementById("controls-volume-button"); 
        const volumeBar = document.getElementById("volume-bar");
        const scrollBar = document.getElementById("scroll-bar");
        const videoTime = document.getElementById("movie-duration");
        const questionButton = document.getElementById("question-button");
        const subtitlesButton = document.getElementById("subtitles-button");
        const screenToggleButton = document.getElementById("screen-toggle-button");
        const video = document.getElementById("video-player");
        
        video.addEventListener('loadedmetadata', () => {
            this.setState({duration: Math.floor(video.duration)})
        });

        let controlsToggleTimer;
        let idleToggleTimer;
        let idleRatingToggleTimer;
        window.addEventListener("mousemove", () => {
            clearTimeout(controlsToggleTimer);
            clearTimeout(idleToggleTimer);
            clearTimeout(idleRatingToggleTimer);
            videoPlayerNavigationContainer.style.opacity = "1.0";
            backButtonContainer.style.opacity = "1.0";
            idlePopup.style.opacity = "0";
            video.style.opacity = "1.0";
            idleRatingPopup.style.opacity = "0";

            controlsToggleTimer = setTimeout(() => {
                videoPlayerNavigationContainer.style.opacity = "0";
                backButtonContainer.style.opacity = "0";
            }, 3000);
            
            if(this.state.play === false) {
                idleToggleTimer = setTimeout(() => {
                    idlePopup.style.opacity = "1.0";
                    video.style.opacity = "0.4";
                }, 7000);

                idleRatingToggleTimer = setTimeout(() => {
                    idleRatingPopup.style.opacity = "1.0";
                }, 7500);
            }
        })

        backButton.addEventListener("mouseover", () => {
            backButtonText.style.opacity = "1.0";
            backButton.style.fontSize = "2.1em";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        backButton.addEventListener("mouseout", () => {
            backButtonText.style.opacity = "0.0";
            backButton.style.fontSize = "1.8em";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        backButtonText.addEventListener("mouseover", () => {
            backButtonText.style.opacity = "1.0";
            backButton.style.fontSize = "2.1em";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        backButtonText.addEventListener("mouseout", () => {
            backButtonText.style.opacity = "0.0";
            backButton.style.fontSize = "1.8em";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })
        
        backButtonContainer.addEventListener("mouseover", () => {
            backButtonText.style.opacity = "1.0";
            backButton.style.fontSize = "2.1em";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        backButtonContainer.addEventListener("mouseout", () => {
            backButtonText.style.opacity = "0.0";
            backButton.style.fontSize = "1.8em";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        scrollBar.addEventListener("mouseover", () => {
            scrollBar.style.height = "8px";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        scrollBar.addEventListener("mouseout", () => {
            scrollBar.style.height = "5px";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        playButton.addEventListener("mouseover", () => {
            playButton.style.transform = "scale(1.2)";
            screenToggleButton.style.color = "grey";
        })

        playButton.addEventListener("mouseout", () => {
            playButton.style.transform = "scale(1.0)";
            screenToggleButton.style.color = "white";
        })

        rewindButton.addEventListener("mouseover", () => {
            rewindButton.style.transform = "scale(1.2)";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        rewindButton.addEventListener("mouseout", () => {
            rewindButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        fastForwardButton.addEventListener("mouseover", () => {
            fastForwardButton.style.transform = "scale(1.2)";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        fastForwardButton.addEventListener("mouseout", () => {
            fastForwardButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        let volumeToggleTimer;

        volumeButton.addEventListener("mouseout", () => {
            volumeToggleTimer = setTimeout(() => {
                volumeBar.style.display = "none";
                volumeButton.style.transform = "scale(1.0)";
                scrollBar.style.opacity = "1.0";
                videoTime.style.opacity = "1.0"
                playButton.style.color = "white";
                screenToggleButton.style.color = "white";
            }, 100);
        })

        volumeButton.addEventListener("mouseover", () => {
            clearTimeout(volumeToggleTimer);
            volumeBar.style.display = "block";
            volumeButton.style.transform = "scale(1.2)";
            scrollBar.style.opacity = "0.0";
            videoTime.style.opacity = "0.0"
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        volumeBar.addEventListener("mouseover", () => {
            clearTimeout(volumeToggleTimer);
            volumeBar.style.display = "block";
            volumeButton.style.transform = "scale(1.2)";
            scrollBar.style.opacity = "0.0";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        volumeBar.addEventListener("mouseout", () => {
            volumeToggleTimer = setTimeout(() => {
                volumeBar.style.display = "none";
                volumeButton.style.transform = "scale(1.0)";
                scrollBar.style.opacity = "1.0";
                videoTime.style.opacity = "1.0"
                playButton.style.color = "white";
                screenToggleButton.style.color = "white";
            }, 100);
        })

        questionButton.addEventListener("mouseover", () => {
            questionButton.style.transform = "scale(1.2)";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        questionButton.addEventListener("mouseout", () => {
            questionButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        subtitlesButton.addEventListener("mouseover", () => {
            subtitlesButton.style.transform = "scale(1.2)";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        subtitlesButton.addEventListener("mouseout", () => {
            subtitlesButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        screenToggleButton.addEventListener("mouseover", () => {
            screenToggleButton.style.transform = "scale(1.2)";
            playButton.style.color = "grey";
        })

        screenToggleButton.addEventListener("mouseout", () => {
            screenToggleButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";
        })

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
        }
    }

    componentWillUnmount() {

        clearInterval(this.seekCheck) 
        clearInterval(this.timeCheck)
    }

    togglePlay() {
        let actualVideo = document.getElementById("video-player")
        if(this.state.play === true) {
            actualVideo.pause();
            this.setState({ play: false })
        } else {
            actualVideo.play();
            this.setState({ play: true })
        }
    }

    changeTime(change) {
        let actualVideo = document.getElementById("video-player")
        return () => {
            actualVideo.currentTime += change;
        };
    }


    toggleFullScreen() {
        let actualVideoTwo = document.getElementById("video-player");
        return () => {
            if (actualVideoTwo.requestFullscreen) {
                actualVideoTwo.requestFullscreen();
            } else if (actualVideoTwo.webkitRequestFullScreen) {
                actualVideoTwo.webkitRequestFullScreen();
            } else if (actualVideoTwo.mozRequestFullScreen) {
                actualVideoTwo.mozRequestFullScreen();
            }
        };
    }

    toggleMute() {
        let actualVideoThree = document.getElementById("video-player");
        if (actualVideoThree.muted) {
            actualVideoThree.muted = false;
            this.setState({ volume: 1 });
        } else {
            actualVideoThree.muted = true;
            this.setState({ volume: 0 });
        }
    }

    toggleVolume(e) {
        let actualVideoFour = document.getElementById("video-player");
        e.preventDefault();
        let change = parseFloat(e.target.value);
        actualVideoFour.volume = change;
        this.setState({ volume: change })
    }

    toggleSeek(e) {
        const actualVideoFive = document.getElementById("video-player");  
        const change = actualVideoFive.duration * (e.target.value / this.state.duration);
        actualVideoFive.currentTime = change;
        this.setState({ seek: change });
    }

    updateSeek() {
        const actualVideoSix = document.getElementById("video-player");  
        this.setState({ seek: actualVideoSix.currentTime });
    }

    updateTime() {
        const timer = this.state.duration - Math.floor(this.state.seek);
        let minutes = Math.floor(timer / 60)
        let seconds = timer % 60;
        
        if(minutes < 10) {
            minutes = `0${minutes}`;
        }

        if(seconds < 10) {
            seconds = `0${seconds}`;
        }

        const newTime = `${minutes}:${seconds}`
        this.setState({ time: newTime });
    }
    
    render() {
        let videoPlayerLink;
        let videoTitle;
        let videoYear;
        let videoMaturityRating;
        let videoRunTime;
        let videoDescription;

        if (this.props.video) {
            videoPlayerLink = this.props.video.video_link;
            videoTitle = this.props.video.title
            videoYear = this.props.video.year
            videoMaturityRating = this.props.video.maturity_rating
            videoRunTime = this.props.video.runtime
            videoDescription = this.props.video.description
        } else {
            videoPlayerLink = null;
        }

        let playButtonRender;
        if (this.state.play === true) {
            playButtonRender = <i className="fas fa-pause" id="nav-controls-play-button" onClick={this.togglePlay}></i>     
        } else if (this.state.play === false) {
            playButtonRender = <i className="fas fa-play" id="nav-controls-play-button" onClick={this.togglePlay}></i>
        }

        let volumeButtonRender;
        if (this.state.volume > 0.6) {
            volumeButtonRender = <i className="vol fas fa-volume-up" id="controls-volume-button" onClick={this.toggleMute}></i>
        } else if (this.state.volume > 0.3 && this.state.volume <= 0.6) {
            volumeButtonRender = <i className="voltwo fas fa-volume-down" id="controls-volume-button" onClick={this.toggleMute}></i>
        } else if (this.state.volume > 0 && this.state.volume <= 0.3) {
            volumeButtonRender = <i className="voltwo fas fa-volume-off" id="controls-volume-button" onClick={this.toggleMute}></i>
        } else {
            volumeButtonRender = <i className="vol fas fa-volume-mute" id="controls-volume-button" onClick={this.toggleMute}></i>
        }

        return (
            <div className="video-player-container" id="video-player-container">
                <video id="video-player" className="video-player" src={videoPlayerLink} preload="auto" autoPlay ></video>
                
                <Link to={"/browse"}>
                    <div id="video-player-back-arrow-container" className="video-player-back-arrow-container">
                        <i className="fas fa-arrow-left fa-2x" id="back-arrow-icon"></i>
                        <h1 id="back-arrow-text" className="back-arrow-text">Back to Browse</h1>
                    </div>
                </Link>

                <div className="video-rating-idle-popup" id="video-rating-idle-popup">
                    <div className="idle-rating-redbar"></div>
                    <h3 className="idle-rating">RATED {videoMaturityRating}</h3>
                </div>

                <div className="video-info-idle-popup" id="video-info-idle-popup">
                    <h3 className="idle-intro">You're watching</h3>
                    <h1 className="idle-movie-title">{videoTitle}</h1>
                    <div className="idle-subinfo-container">
                        <h4 className="subinfo-element">{videoYear}</h4>
                        <h4 className="subinfo-element">{videoMaturityRating}</h4>
                        <h4 className="subinfo-element">{videoRunTime}</h4>
                    </div>
                    <p className="idle-description">{videoDescription}</p>
                </div>

                <div id= "video-player-navigation-container" className="video-player-navigation-container">
                    
                    <div className="navigation-scroll-bar-container">
                        <input id="scroll-bar" type="range" min="0" max={this.state.duration} step="1" value={Math.floor(this.state.seek)} onChange={this.toggleSeek}/>
                        <h1 className="movie-duration" id="movie-duration">{this.state.time}</h1>
                    </div>

                    
                    <div className="navigation-controls-container">
                        <div className="left-navigations-controls-container">
                            {playButtonRender}
                            <img id="reverse-button" className="reverse-button" src={window.forward} onClick={this.changeTime(-10)} />
                            <img id="forward-button" className="forward-button" src={window.back} onClick={this.changeTime(10)}/>
                            <div>     
                                <input type="range" id="volume-bar" min="0" max="1" step="0.01" onChange={this.toggleVolume} value={this.state.volume}/>
                                {volumeButtonRender}
                            </div>
                            <h1 className="movie-title">{videoTitle}</h1>
                        </div>

                        <div className="right-navigations-controls-container">
                            <a href="https://help.netflix.com/en/"><i className="far fa-question-circle" id="question-button"></i></a>
                            <a href="https://allesl.com/wp-content/uploads/2018/04/No-Subtitles-Feature.png"><img src={window.subtitles} id="subtitles-button" className="subtitles-button" /></a>
                            <i className="fas fa-compress" id="screen-toggle-button" onClick={this.toggleFullScreen()}></i>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default withRouter(VideoPlayer);

