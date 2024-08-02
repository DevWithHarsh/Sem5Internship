import React, { useEffect, useState } from 'react'

export default function Recipe() {
    const [recipes, setRecipe] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
        .then((repsonse) => {
            return repsonse.json();
        })
        .then((data) => {
            setRecipe(data["recipes"]);
        });
    },[]);
    return (
        <>
            <div className="uk-container">
                <div data-uk-grid>
                    <div className="uk-width-1-2@s">
                        <div><img className="uk-border-rounded-large" src="https://plus.unsplash.com/premium_photo-1671547329181-8b1925cab127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image alt"></img></div>
                    </div>
                    <div className="uk-width-expand@s uk-flex uk-flex-middle">
                        <div>
                            <h1>White calzones with marinara sauce</h1>
                            <p>Supermarket
                                brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check
                                the label and choose ricotta made with as few ingredients as possible.</p>
                            <div className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider" data-uk-grid>
                                <div>
                                    <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Active Time</h5>
                                    <span className="uk-text-small">20 mins</span>
                                </div>
                                <div>
                                    <span data-uk-icon="icon: future; ratio: 1.4"></span>
                                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Total Time</h5>
                                    <span className="uk-text-small">50 mins</span>
                                </div>
                                <div>
                                    <span data-uk-icon="icon: users; ratio: 1.4"></span>
                                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Yield</h5>
                                    <span className="uk-text-small">Serves 4</span>
                                </div>
                            </div>
                            <hr></hr>
                                <div data-uk-grid>
                                    <div className="uk-width-auto@s uk-text-small">
                                        <p className="uk-margin-small-top uk-margin-remove-bottom">Created by <a href="#">Alex Williamns</a></p>
                                        <span className="uk-text-muted">21 recipes</span>
                                    </div>
                                    <div className="uk-width-expand@s uk-flex uk-flex-middle uk-flex-right@s">
                                        <a href="#" className="uk-icon-link" data-uk-icon="icon: plus-circle; ratio: 1.2"
                                            data-uk-tooltip="title: Save Recipe"></a>
                                        <a href="#" className="uk-icon-link uk-margin-left" data-uk-icon="icon: cart; ratio: 1.2"
                                            data-uk-tooltip="title: Shopping List"></a>
                                        <a href="#" className="uk-icon-link uk-margin-left" data-uk-icon="icon: print; ratio: 1.2"
                                            data-uk-tooltip="title: Print Recipe"></a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-section uk-section-default">
                <div className="uk-container uk-container-small">
                    <div className="uk-grid-large" data-uk-grid>
                        <div className="uk-width-expand@m">
                            <div className="uk-article">
                                <h3>How to Make It</h3>
                                <div id="step-1" className="uk-grid-small uk-margin-medium-top" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <a href="#" className="uk-step-icon" data-uk-icon="icon: check; ratio: 0.8"
                                            data-uk-toggle="target: #step-1; cls: uk-step-active"></a>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h5 className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary" data-uk-leader="fill:—">1. Step</h5>
                                        <div className="uk-step-content">Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the
                                            have didn't kicked records the it framework by the for traveler sure the can most well her.
                                            Entered have break himself cheek, and activity, for bit of text.</div>
                                    </div>
                                </div>
                                <div id="step-2" className="uk-grid-small uk-margin-medium-top" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <a href="#" className="uk-step-icon" data-uk-icon="icon: check; ratio: 0.8"
                                            data-uk-toggle="target: #step-2; cls: uk-step-active"></a>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h5 className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary" data-uk-leader="fill:—">2. Step</h5>
                                        <div className="uk-step-content">Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the
                                            have didn't kicked records the it framework by the for traveler sure the can most well her.
                                            Entered have break himself cheek, and activity, for bit of text.</div>
                                    </div>
                                </div>
                                <div id="step-3" className="uk-grid-small uk-margin-medium-top" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <a href="#" className="uk-step-icon" data-uk-icon="icon: check; ratio: 0.8"
                                            data-uk-toggle="target: #step-3; cls: uk-step-active"></a>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h5 className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary" data-uk-leader="fill:—">3. Step</h5>
                                        <div className="uk-step-content">Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the
                                            have didn't kicked records the it framework by the for traveler sure the can most well her.
                                            Entered have break himself cheek, and activity, for bit of text.</div>
                                    </div>
                                </div>
                                <div id="step-4" className="uk-grid-small uk-margin-medium-top" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <a href="#" className="uk-step-icon" data-uk-icon="icon: check; ratio: 0.8"
                                            data-uk-toggle="target: #step-4; cls: uk-step-active"></a>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h5 className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary" data-uk-leader="fill:—">4. Step</h5>
                                        <div className="uk-step-content">Labour, of evaluated would he the a the our what is in the arduous sides behavioural is which the
                                            have didn't kicked records the it framework by the for traveler sure the can most well her.
                                            Entered have break himself cheek, and activity, for bit of text.</div>
                                    </div>
                                </div>
                                <hr className="uk-margin-medium-top uk-margin-large-bottom"></hr>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <h3>Other Recipes You May Like</h3>
                        <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid>
                        {recipes.map((value) => {
                                    return (
                                        <div>
                                            <div
                                                className="uk-card">
                                                <div className="uk-card-media-top uk-inline uk-light">
                                                    <img className="uk-border-rounded-medium" src={value.image} alt="Course Title"></img>
                                                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                                                    <div className="uk-position-xsmall uk-position-top-right">
                                                        <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                                            data-uk-icon="heart"></a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">{value.name}</h3>
                                                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                                        <div className="uk-width-auto uk-flex uk-flex-middle">
                                                            <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                                            <span className="uk-margin-xsmall-left">{value.rating}</span>
                                                            <span>({value.reviewCount})</span>
                                                        </div>
                                                        <div className="uk-width-expand uk-text-right">{value.mealType}</div>
                                                    </div>
                                                </div>
                                                <a href="recipe.html" className="uk-position-cover"></a>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}
