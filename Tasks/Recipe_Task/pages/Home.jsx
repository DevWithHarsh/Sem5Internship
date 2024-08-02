import React, { useEffect, useState } from 'react'

export default function Home() {
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
        <body>
            <div className="uk-container">
                <div className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
                    style={{ backgroundImage: `url(img/header.jpg)` }}>
                    <div className="uk-position-cover uk-header-overlay"></div>
                    <div className="uk-position-relative" data-uk-grid>
                        <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                            <div className="uk-padding-large uk-padding-remove-right">
                                <h1 className="uk-heading-small uk-margin-remove-top">Choose from thousands of recipes</h1>
                                <p className="uk-text-secondary">Appropriately integrate technically sound value with scalable infomediaries
                                    negotiate sustainable strategic theme areas</p>
                                <a className="uk-text-secondary uk-text-600 uk-text-small hvr-forward" href="sign-up.html">Sign up today<span
                                    className="uk-margin-small-left" data-uk-icon="arrow-right"></span></a>
                            </div>
                        </div>
                        <div className="uk-width-expand@m">
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-section uk-section-default">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-1-4@m sticky-container">
                            <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
                                <h2>Recipes</h2>
                                <ul className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top" data-uk-nav>
                                    <li className="uk-parent uk-open">
                                        <a href="#">Dish Type</a>
                                        <ul className="uk-nav-sub">
                                            <li><a href="#">Appetizers & Snacks</a></li>
                                            <li><a href="#">Bread Recipes</a></li>
                                            <li><a href="#">Cake Recipes</a></li>
                                            <li><a href="#">Candy and Fudge</a></li>
                                            <li><a href="#">Casserole Recipes</a></li>
                                            <li><a href="#">Christmas Cookies</a></li>
                                            <li><a href="#">Cocktail Recipes</a></li>
                                            <li><a href="#">Main Dishes</a></li>
                                            <li><a href="#">Pasta Recipes</a></li>
                                            <li><a href="#">Pie Recipes</a></li>
                                            <li><a href="#">Sandwiches</a></li>
                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <a href="#">Meal Type</a>
                                        <ul className="uk-nav-sub">
                                            <li><a href="#">Breakfast and Brunch</a></li>
                                            <li><a href="#">Desserts</a></li>
                                            <li><a href="#">Dinners</a></li>
                                            <li><a href="#">Lunch</a></li>
                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <a href="#">Diet and Health</a>
                                        <ul className="uk-nav-sub">
                                            <li><a href="#">Diabetic</a></li>
                                            <li><a href="#">Gluten Free</a></li>
                                            <li><a href="#">High Fiber Recipes</a></li>
                                            <li><a href="#">Low Calorie</a></li>
                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <a href="#">World Cuisine</a>
                                        <ul className="uk-nav-sub">
                                            <li><a href="#">Chinese</a></li>
                                            <li><a href="#">Indian</a></li>
                                            <li><a href="#">Italian</a></li>
                                            <li><a href="#">Mexican</a></li>
                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <a href="#">Seasonal</a>
                                        <ul className="uk-nav-sub">
                                            <li><a href="#">Baby Shower</a></li>
                                            <li><a href="#">Birthday</a></li>
                                            <li><a href="#">Christmas</a></li>
                                            <li><a href="#">Halloween</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="uk-width-expand@m">
                            <div data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <form className="uk-search uk-search-default uk-width-1-1">
                                        <span data-uk-search-icon></span>
                                        <input className="uk-search-input uk-text-small uk-border-rounded uk-form-large" type="search" placeholder="Search for recipes..."></input>
                                    </form>
                                </div>
                                <div className="uk-width-1-3@m uk-text-right@m uk-light">
                                    <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
                                        <option>Sort by: Latest</option>
                                        <option>Sort by: Top Rated</option>
                                        <option>Sort by: Trending</option>
                                    </select>
                                </div>
                            </div>
                            <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
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
                            <div className="uk-margin-large-top uk-text-small">
                                <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
                                    <li><a href="#"><span data-uk-pagination-previous></span></a></li>
                                    <li><a href="#">1</a></li>
                                    <li className="uk-active"><span>2</span></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><span data-uk-pagination-next></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </>
    );
}