import React from "react";
import { Link } from "react-router-dom";

class FeaturedVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { volume: 1}
        this.volumeToggle = this.volumeToggle.bind(this)
    }

    componentDidMount() {

        let featured = document.getElementById('featured')
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                featured.muted = true;
                featured.pause();
                this.setState({ volume: 0 })
            } else if (window.scrollY === 0) {
                featured.muted = false;
                featured.play()
                this.setState({ volume: 1 });
            }
        });
    }
    
    volumeToggle() {

        let featured = document.getElementById('featured')
        if (featured.muted) {
            featured.muted = false;
            this.setState( { volume: 1 } );
        } else {
            featured.muted = true;
            this.setState( { volume: 0 } );
        }
    }
        
    render() {

        let chooseButton;
        if(this.state.volume === 0) {
            chooseButton = <i className="fas fa-volume-mute fa-1x"></i>
        } else if(this.state.volume === 1) {
            chooseButton = <i className="fas fa-volume-up fa-1x"></i>
        }

        
        return (
            <div className="featured-video-container">
                
                <video id="featured" className="featured-video" src={this.props.video.video_link} loop autoPlay ></video>
                
                
                <div className="left-featured-container">
                    <img src={window.avengers_wordart} className="avengers-wordart" />
                    
                    <div className="featured-buttons">
                        <div className="actual-buttons"><Link to={`/watch/${this.props.video.id}`}>▶ Play</Link></div>
                        <button className="actual-buttons">+ My List</button>
                    </div>
                </div>
    
                <div className="right-featured-container">
                    <div className="featured-volume" onClick={this.volumeToggle}>{chooseButton}</div>
                    <span className="featured-maturity-rating"><span className="featured-maturity-number">{this.props.video.maturity_rating}</span></span>
                </div>
            </div> 
        )
    }  
};

export default FeaturedVideo;


