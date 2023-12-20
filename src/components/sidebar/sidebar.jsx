import React, { Component } from 'react';
import "./sidebar.css"; // Ensure this CSS file is in the same directory

class Sidebar extends Component {
    state = {
        isClosed: false
    };

    toggleHamburger = () => {
        this.setState(prevState => ({
            isClosed: !prevState.isClosed
        }));
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            isClosed: !prevState.isClosed
        }));
    }

    render() {
        const { isClosed } = this.state;

        return (
            <div id="wrapper" className={isClosed ? 'toggled' : ''}>
                <div className="overlay" onClick={this.toggleSidebar}></div>

                {/* Sidebar */}
                <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <a href="#">Brand</a></div></div>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">Team</a></li>
                        <li class="dropdown">
                            <a href="#works" class="dropdown-toggle" data-toggle="dropdown">Works <span class="caret"></span></a>
                            <ul class="dropdown-menu animated fadeInLeft" role="menu">
                                <div class="dropdown-header">Dropdown heading</div>
                                <li><a href="#pictures">Pictures</a></li>
                                <li><a href="#videos">Videeos</a></li>
                                <li><a href="#books">Books</a></li>
                                <li><a href="#art">Art</a></li>
                                <li><a href="#awards">Awards</a></li>
                            </ul>
                        </li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#followme">Follow me</a></li>       </ul>
                </nav>
                {/* /#sidebar-wrapper */}

                {/* Page Content */}
                <div id="page-content-wrapper">
                    <button type="button" className={`hamburger animated fadeInLeft ${isClosed ? 'is-open' : 'is-closed'}`} onClick={this.toggleSidebar}>
                        <span className="hamb-top"></span>
                        <span className="hamb-middle"></span>
                        <span className="hamb-bottom"></span>
                    </button>
                    {/* <div className="container">
                      
                    </div> */}
                </div>
                {/* /#page-content-wrapper */}
            </div>
        );
    }
}

export default Sidebar;
