import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {top: false}

        this.navToggle = this.navToggle.bind(this)
        this.showSearch = this.showSearch.bind(this)
        this.hideSearch = this.hideSearch.bind(this)
        this.showDropDown = this.showDropDown.bind(this)
        this.hideDropDown = this.hideDropDown.bind(this)
    }

    navToggle() {
        if (window.scrollY > 1) {
            this.setState({ top: true })
        } else {
            this.setState({ top: false })
        }
    }

    showSearch() {
        document.getElementById('right-nav-container').style.width = "38%";
        document.getElementById('search-container').style.width = "270px";
        document.getElementById('search-container').style.background = "#000000";
        document.getElementById('search-container').style.border = "solid 1px white";
        document.getElementById('nav-search-input').style.display = "block";
        document.getElementById('nav-search-input').style.fontSize = "14px";
        document.getElementById('nav-search-input').focus();
    }

    hideSearch() {
        document.getElementById('right-nav-container').style.width = "17%";
        document.getElementById('search-container').style.width = "25px";
        document.getElementById('search-container').style.background = "none";
        document.getElementById('search-container').style.border = "none";
        document.getElementById('nav-search-input').style.display = "none";
        document.getElementById('nav-search-input').style.fontSize = "0px";
    }

    showDropDown() {
        document.getElementById("carrot-container").style.display = "flex";
        document.getElementById("up-carrot").style.display = "block";
        document.getElementById("dropdown").style.display = "block";
    }

    hideDropDown() {
        document.getElementById("carrot-container").style.display = "none";
        document.getElementById("up-carrot").style.display = "none";
        document.getElementById("dropdown").style.display = "none";
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.navToggle);

        const searchButton = document.getElementById("search-button")
        searchButton.addEventListener("click", this.showSearch)

        const searchInput = document.getElementById("nav-search-input")
        searchInput.addEventListener("blur", this.hideSearch)

        const dropdownIcon = document.getElementById("dropdown-trigger");
        dropdownIcon.addEventListener("mouseover", this.showDropDown)
        dropdownIcon.addEventListener("mouseout", this.hideDropDown)

        const dropdownCarrot = document.getElementById("down-carrot");
        dropdownCarrot.addEventListener("mouseover", this.showDropDown)
        dropdownCarrot.addEventListener("mouseout", this.hideDropDown)

        const downCarrotContainer = document.getElementById("carrot-container");
        downCarrotContainer.addEventListener("mouseover", this.showDropDown)
        downCarrotContainer.addEventListener("mouseout", this.hideDropDown)

        const upCarrot = document.getElementById("up-carrot");
        upCarrot.addEventListener("mouseover", this.showDropDown)
        upCarrot.addEventListener("mouseout", this.hideDropDown)

        const dropdown = document.getElementById("dropdown");
        dropdown.addEventListener("mouseover", this.showDropDown)
        dropdown.addEventListener("mouseout", this.hideDropDown)
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.navToggle);

        const searchButton = document.getElementById("search-button")
        searchButton.removeEventListener("click", this.showSearch)

        const searchInput = document.getElementById("nav-search-input")
        searchInput.removeEventListener("blur", this.hideSearch)

        const dropdownIcon = document.getElementById("dropdown-trigger");
        dropdownIcon.removeEventListener("mouseover", this.showDropDown)
        dropdownIcon.removeEventListener("mouseout", this.hideDropDown)

        const dropdownCarrot = document.getElementById("down-carrot");
        dropdownCarrot.removeEventListener("mouseover", this.showDropDown)
        dropdownCarrot.removeEventListener("mouseout", this.hideDropDown)

        const downCarrotContainer = document.getElementById("carrot-container");
        downCarrotContainer.removeEventListener("mouseover", this.showDropDown)
        downCarrotContainer.removeEventListener("mouseout", this.hideDropDown)

        const upCarrot = document.getElementById("up-carrot");
        upCarrot.removeEventListener("mouseover", this.showDropDown)
        upCarrot.removeEventListener("mouseout", this.hideDropDown)

        const dropdown = document.getElementById("dropdown");
        dropdown.removeEventListener("mouseover", this.showDropDown)
        dropdown.removeEventListener("mouseout", this.hideDropDown)
    }

    render () {

        let navContainerClass = (this.state.top ? "nav-container-opaque" : "nav-container-transparent")

        return (
            <>
                <nav className={navContainerClass}>
                    
                    <div className="left-nav">
                        <Link to="/browse" className="nav-logo-container"><img src={window.logo} className="nav-logo" /></Link>

                        <div className="browse-container">
                            <Link to="/browse" className="browse-links-home">Home</Link>
                            <Link to="/tv-shows" className="browse-links-shows">TV Shows</Link>
                            <Link to="/movies" className="browse-links-movies">Movies</Link>
                            <Link to="/recently-added" className="browse-links-added">Recently Added</Link>
                            <Link to={`/my-list/${this.props.currentUser}`} className="browse-links-lists">My List</Link>
                        </div>    
                    </div>
            
                    <div id="right-nav-container" className="right-nav">

                        <div id="search-container" className="search-container">
                            <form className="nav-search-form">
                                <i id="search-button" className="fas fa-search fa-2x"></i>
                                <input type="text" name="search" placeholder="Titles, people, genres" id="nav-search-input" className="nav-search-input" />
                            </form>
                        </div>
                        
                        <a href="https://dvd.netflix.com/Plans" className="dvd">DVD</a>
                        <i className="fas fa-bell fa-3x"></i>
                        <img src={window.icon} id="dropdown-trigger" className="nav-icon"/>
                        <i id="down-carrot" className="fas fa-caret-down fa-2x"></i>
                    </div>

                </nav>

                <div id="carrot-container" className="nav-up-carrot-container"><i id="up-carrot" className="fas fa-caret-up fa-2x"></i></div>

                <div id="dropdown" className="nav-dropdown">
                    <div className="dropdown-bottom-container">
                        <Link to="/profiles" className="dropdown-links">Account</Link>
                        <a href="https://help.netflix.com/en/" className="dropdown-links">Help Center</a>
                        <span onClick={this.props.logout} className="dropdown-links">Sign out of Netflix</span>
                    </div> 
                </div>
            </>

        )
    }
}

export default NavBar;