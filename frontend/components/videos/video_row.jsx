import React from "react";
import Video from './video'

class VideoRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="video-row-header">{this.props.header}</div>

                <div className="video-row-container">
                    <Video vidNum="v1 vid" video={this.props.videos[0]}/>
                    <Video vidNum="v2 vid" video={this.props.videos[1]} />
                    <Video vidNum="v3 vid" video={this.props.videos[2]} />
                    <Video vidNum="v4 vid" video={this.props.videos[3]} />
                    <Video vidNum="v5 vid" video={this.props.videos[4]} />
                </div>
            </>
        )
    }

}



export default VideoRow