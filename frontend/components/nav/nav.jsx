import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render () {
        return (
            <nav className="nav-container">
                
                <div className="left-nav">
                    <Link to="/browse" className="nav-logo-container"><img src={window.logo} className="nav-logo" /></Link>

                    <div className="browse-container">
                        <Link to="/browse" className="browse-links-home">Home</Link>
                        <Link to="/tv-shows" className="browse-links-shows">TV Shows</Link>
                        <Link to="/movies" className="browse-links-movies">Movies</Link>
                        <Link to="/recently-added" className="browse-links-added">Recently Added</Link>
                        <Link to="/my-list" className="browse-links-lists">My List</Link>
                    </div>    
                </div>

                <div className="right-nav">
                    <i className="fas fa-search fa-3x"></i>
                    <a href="https://dvd.netflix.com/Plans" className="dvd">DVD</a>
                    <i className="fas fa-bell fa-3x"></i>
                    <img src={window.icon} className="nav-icon"/>
                </div>

            </nav>
        )
    }
}

export default NavBar;