import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <div className="Header-sec">
                <Navbar />
            </div>
        </div>
    );
}

function Navbar() {
    return (
        <>
            <nav className="uk-navbar-container uk-letter-spacing-small">
                <div className="uk-container">
                    <div className="uk-position-z-index" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <a className="uk-navbar-item uk-logo" href="index.html">Kocina</a>
                            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                              <li className="uk-active"><Link to="/">Home</Link></li>
                                <li ><Link to="/recipe">Recipe</Link></li>
                                <li ><Link to="/search">Search</Link></li>
                                <li ><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <div>
                                <a className="uk-navbar-toggle" data-uk-search-icon href="#"></a>
                                <div className="uk-drop uk-background-default" data-uk-drop="mode: click; pos: left-center; offset: 0">
                                    <form className="uk-search uk-search-navbar uk-width-1-1">
                                        <input className="uk-search-input uk-text-demi-bold" type="search" placeholder="Search..." autofocus></input>
                                    </form>
                                </div>
                            </div>
                            <ul className="uk-navbar-nav uk-visible@m">
                                <li ><Link to="/signin">Sign-in</Link></li>
                            </ul>
                            <div className="uk-navbar-item">
                                <div><Link className="uk-button uk-button-primary" to="/signup">Sign Up</Link></div>
                            </div>
                            <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle><span
                                data-uk-navbar-toggle-icon></span></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}