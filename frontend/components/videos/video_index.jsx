import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {
    render() {
        return (
            <>
                <h1>You made it to the browse page</h1>
                <p>Rejoice you peasant</p>     
                <button onClick={this.props.logout}>Log Out!</button>    
            </>
        )
    }
}

export default VideoIndex;