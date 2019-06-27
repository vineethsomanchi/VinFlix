import React from 'react';
import NavBar from '../nav/nav_container';
import VideoRow from '../videos/video_row';

class MyList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchListItems();
    }

    render() {

        if(this.props.lists.length === 0) return null;
        
        const listRows = [];
        for(let i = 0; i < this.props.lists.length; i++) {
            listRows.push(this.props.lists[i])
        }
        
        return (
            <>
                <NavBar/>
                <div className="lists-video-row-main">
                    <VideoRow rowNum="l1" videos={listRows} header="My List" createListItem={this.props.createListItem} deleteListItem={this.props.deleteListItem} lists={this.props.lists}/>
                </div>   
            </>
        )    
    }
}

export default MyList;