import React from "react";
import Video from './video'

class VideoRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { smallRotate: false, mediumRotate: false, accent: false  }

        this.smallRotate = this.smallRotate.bind(this);
        this.mediumRotate = this.mediumRotate.bind(this);
        this.leftRotate = this.leftRotate.bind(this);
        this.rightRotate = this.rightRotate.bind(this);
        this.accentArrows = this.accentArrows.bind(this);
    }

    smallRotate() {
        const videoRowContainer = document.getElementById(`video-row-container ${this.props.rowNum}`);  
        if(this.state.smallRotate === false) {
            videoRowContainer.style.transform = "translate(-17vw)";
            this.setState({smallRotate: true})
        } else {
            videoRowContainer.style.transform = "translate(0.1vw)";
            this.setState({ smallRotate: false })
        }
    }

    mediumRotate() {
        const videoRowContainer = document.getElementById(`video-row-container ${this.props.rowNum}`);
        if (this.state.mediumRotate === false) {
            videoRowContainer.style.transform = "translate(-37vw)";
            this.setState({ mediumRotate: true })
        } else {
            videoRowContainer.style.transform = "translate(-19.3vw)";
            this.setState({ mediumRotate: false })
        }
    }

    accentArrows() {
        const leftArrow = document.getElementById(`left-arrow-id ${this.props.rowNum}`);
        if(this.state.accent === false) {
            leftArrow.style.opacity = "0.4";
            rightArrow.style.opacity = "0.4";
            this.setState({ accent: true })
        } else if(this.state.accent === true) {
            leftArrow.style.opacity = "0";
            rightArrow.style.opacity = "0";
            this.setState({ accent: false })
        }
    }

    leftRotate() {
        const videoRowContainer = document.getElementById(`video-row-container ${this.props.rowNum}`);
        videoRowContainer.style.transform = "translate(0.1vw)";
    }

    rightRotate() {
        const videoRowContainer = document.getElementById(`video-row-container ${this.props.rowNum}`);
        videoRowContainer.style.transform = "translate(-19.3vw)";
    }

    componentDidMount () {
        const leftArrowContainer = document.getElementById(`left-arrow-container ${this.props.rowNum}`);
        const rightArrowContainer = document.getElementById(`right-arrow-container ${this.props.rowNum}`);
        const leftArrow = document.getElementById(`left-arrow-id ${this.props.rowNum}`);
        const rightArrow = document.getElementById(`right-arrow-id ${this.props.rowNum}`)
        leftArrowContainer.addEventListener("click", this.leftRotate);
        rightArrowContainer.addEventListener("click", this.rightRotate);
        leftArrow.addEventListener("click", this.leftRotate);
        rightArrow.addEventListener("click", this.rightRotate);
    }

    componentWillUnmount () {
        const leftArrowContainer = document.getElementById(`left-arrow-container ${this.props.rowNum}`);
        const rightArrowContainer = document.getElementById(`right-arrow-container ${this.props.rowNum}`);
        const leftArrow = document.getElementById(`left-arrow-id ${this.props.rowNum}`);
        const rightArrow = document.getElementById(`right-arrow-id ${this.props.rowNum}`)
        leftArrowContainer.removeEventListener("click", this.leftRotate);
        rightArrowContainer.removeEventListener("click", this.rightRotate);
        leftArrow.removeEventListener("click", this.leftRotate);
        rightArrow.removeEventListener("click", this.rightRotate);
    }

   

    render() {

        const rowVids = (this.props.videos ? this.props.videos : null)

        const leftArrowContainVar = `left-arrow-container ${this.props.rowNum}`
        const leftArrowVar = `left-arrow-id ${this.props.rowNum}`
        const rightArrowContainVar = `right-arrow-container ${this.props.rowNum}`
        const rightArrowVar = `right-arrow-id ${this.props.rowNum}`
        const videoRowContainVar = `video-row-container ${this.props.rowNum}`

        return (
            <div className="individual-row" id={this.props.rowNum}>
                <div className="video-row-header">{this.props.header}</div>

                <div className="left-arrow-container" id={leftArrowContainVar}>
                    <i className="arrow fas fa-chevron-left" id={leftArrowVar}></i>
                </div>

                <div className="video-row-container" id={videoRowContainVar}>
                    <Video vidNum="v1 vid" rowNum={this.props.rowNum} video={rowVids[0]} accent={this.accentArrows} leftRotate={this.leftRotate} rightRotate={this.rightRotate} mediumRotate={this.mediumRotate}/>
                    <Video vidNum="v2 vid" rowNum={this.props.rowNum}  video={rowVids[1]} accent={this.accentArrows} leftRotate={this.leftRotate} rightRotate={this.rightRotate} smallRotate={this.smallRotate}/>
                    <Video vidNum="v3 vid" rowNum={this.props.rowNum} video={rowVids[2]} accent={this.accentArrows} leftRotate={this.leftRotate} rightRotate={this.rightRotate}/>
                    <Video vidNum="v4 vid" rowNum={this.props.rowNum} video={rowVids[3]} accent={this.accentArrows} leftRotate={this.leftRotate} rightRotate={this.rightRotate}/>
                    <Video vidNum="v5 vid" rowNum={this.props.rowNum} video={rowVids[4]} accent={this.accentArrows} leftRotate={this.leftRotate} rightRotate={this.rightRotate}/>
                    <Video vidNum="v6 vid" rowNum={this.props.rowNum} video={rowVids[5]} accent={this.accentArrows} leftRotate={this.leftRotate} rightRotate={this.rightRotate}/>
                </div>

                <div className="right-arrow-container" id={rightArrowContainVar}>
                    <i className="arrow fas fa-chevron-right" id={rightArrowVar}></i>
                </div>
            </div>
        )
    }

}



export default VideoRow