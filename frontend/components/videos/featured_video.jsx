import React from "react";
import { Link } from "react-router-dom";

class FeaturedVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { volume: 1, myList: false}
        this.volumeToggle = this.volumeToggle.bind(this);
        this.handleFeatured = this.handleFeatured.bind(this);
        this.myListToggle = this.myListToggle.bind(this);
    }

    handleFeatured () {
        if (window.scrollY > 100) {
            featured.muted = true;
            featured.pause();
            this.setState({ volume: 0 })
        } else if (window.scrollY === 0) {
            featured.muted = false;
            featured.play()
            this.setState({ volume: 1 });
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleFeatured);

        for (let i = 0; i < this.props.lists.length; i++) {
            if (this.props.lists[i].id === this.props.video.id) {
                this.setState({ myList: true })
                break
            } else {
                this.setState({ myList: false })
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleFeatured);
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

    myListToggle() {
        if (this.state.myList === true) {
            this.props.deleteListItem(this.props.video.id)
            this.setState({ myList: false })
        } else {
            this.props.createListItem(this.props.video.id)
            this.setState({ myList: true })
        }
    }
        
    render() {

        const featuredVidLink = (this.props.video ? this.props.video.video_link : null)

        let chooseButton;
        if(this.state.volume === 0) {
            chooseButton = <i className="fas fa-volume-mute fa-1x"></i>
        } else if(this.state.volume === 1) {
            chooseButton = <i className="fas fa-volume-up fa-1x"></i>
        }

        let chooseListButton;
        if (this.state.myList === true) {      
            chooseListButton = <button className="actual-buttons" onClick={this.myListToggle}>✓ My List</button>
        } else {
            chooseListButton = <button className="actual-buttons" onClick={this.myListToggle}>+ My List</button> 
        }

        
        return (
            <div className="featured-video-container">
                
                <video id="featured" className="featured-video" src={featuredVidLink} loop autoPlay ></video>
                
                
                <div className="left-featured-container">
                    <img src={window.avengers_wordart} className="avengers-wordart" />
                    
                    <div className="featured-buttons">
                        <Link className="actual-buttons" to={`/watch/${this.props.video.id}`}>▶ Play</Link>
                        {chooseListButton}
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


