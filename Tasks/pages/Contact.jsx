import React from 'react'

export default function Contact() {
    return (
        <>
                <div className="uk-section uk-section-default uk-padding-remove-top">
                    <div className="uk-container">
                        <div className="uk-grid-large" data-uk-grid>
                            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                                <div>
                                    <h1 className="uk-margin-bottom">Hello, what's on your mind?</h1>
                                    <p>Credibly administrate market positioning deliverables rather than clicks-and-mortar methodologies.
                                        Proactively formulate out-of-the-box technology with clicks-and-mortar testing procedures. Uniquely
                                        promote leveraged web-readiness for standards compliant value. Rapidiously pontificate cooperative
                                        mindshare via maintainable applications.</p>
                                    <a href="#" className="uk-button uk-button-primary uk-margin-top">Schedule a call</a>
                                </div>
                            </div>
                            <div className="uk-width-1-2@m">
                                <div className="uk-background-primary uk-border-rounded-large uk-light uk-padding uk-margin-top">
                                    <form className="uk-form-stacked">
                                        <div className="uk-margin-bottom">
                                            <label className="uk-form-label" for="name">Name</label>
                                            <div className="uk-form-controls">
                                                <input id="name" className="uk-input uk-border-pill" name="name" type="text" required></input>
                                            </div>
                                        </div>
                                        <div className="uk-margin-bottom">
                                            <label className="uk-form-label" for="_replyto">Email</label>
                                            <div className="uk-form-controls">
                                                <input id="_replyto" className="uk-input uk-border-pill" name="_replyto" type="email" required></input>
                                            </div>
                                        </div>
                                        <div className="uk-margin-bottom">
                                            <label className="uk-form-label" for="message">Message</label>
                                            <div className="uk-form-controls">
                                                <textarea id="message" className="uk-textarea uk-border-rounded-large" name="message" rows="5" minlength="10" required></textarea>
                                            </div>
                                        </div>
                                        <div className="uk-text-center">
                                            <input className="uk-button uk-button-warning uk-border-pill" type="submit" value="Send Message"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                        <a className="uk-logo" href="index.html">Kocina</a>
                        <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 1.2"></button>
                        <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
                            <li ><a href="index.html">Home</a></li>
                            <li ><a href="recipe.html">Recipe</a></li>
                            <li ><a href="search.html">Search</a></li>
                            <li className="uk-active"><a href="contact.html">Contact</a></li>
                            <li ><a href="sign-in.html">Sign In</a></li>
                            <li ><a href="sign-up.html">Sign Up</a></li>
                        </ul>
                        <div className="uk-margin-medium-top">
                            <a className="uk-button uk-width-1-1 uk-button-primary" href="sign-up.html">Sign Up</a>
                        </div>
                        <div className="uk-margin-medium-top uk-text-center">
                            <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex-center">
                                <div>
                                    <a href="https://twitter.com/" data-uk-icon="icon: twitter" className="uk-icon-link" target="_blank"></a>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/" data-uk-icon="icon: facebook" className="uk-icon-link" target="_blank"></a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/" data-uk-icon="icon: instagram" className="uk-icon-link" target="_blank"></a>
                                </div>
                                <div>
                                    <a href="https://vimeo.com/" data-uk-icon="icon: vimeo" className="uk-icon-link" target="_blank"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
