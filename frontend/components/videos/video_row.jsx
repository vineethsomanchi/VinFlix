import React from "react";
import Video from './video'

class VideoRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { smallRotate: false, mediumRotate: false, accent: false  }
        this.leftRotate = this.leftRotate.bind(this);
        this.rightRotate = this.rightRotate.bind(this);
    }


    leftRotate() {
        const videoRowContainer = document.getElementById(`video-row-container ${this.props.rowNum}`);
        videoRowContainer.style.transform = "translate(0.0vw)";
    }

    rightRotate() {
        const videoRowContainer = document.getElementById(`video-row-container ${this.props.rowNum}`);
        videoRowContainer.style.transform = "translate(-18.6vw)";
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
                    <Video vidNum="v1 vid" rowNum={this.props.rowNum} video={rowVids[0]} leftRotate={this.leftRotate} rightRotate={this.rightRotate} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <Video vidNum="v2 vid" rowNum={this.props.rowNum} video={rowVids[1]} leftRotate={this.leftRotate} rightRotate={this.rightRotate} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <Video vidNum="v3 vid" rowNum={this.props.rowNum} video={rowVids[2]} leftRotate={this.leftRotate} rightRotate={this.rightRotate} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <Video vidNum="v4 vid" rowNum={this.props.rowNum} video={rowVids[3]} leftRotate={this.leftRotate} rightRotate={this.rightRotate} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <Video vidNum="v5 vid" rowNum={this.props.rowNum} video={rowVids[4]} leftRotate={this.leftRotate} rightRotate={this.rightRotate} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                    <Video vidNum="v6 vid" rowNum={this.props.rowNum} video={rowVids[5]} leftRotate={this.leftRotate} rightRotate={this.rightRotate} createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                </div>

                <div className="right-arrow-container" id={rightArrowContainVar}>
                    <i className="arrow fas fa-chevron-right" id={rightArrowVar}></i>
                </div>
            </div>
        )
    }

}



export default VideoRow