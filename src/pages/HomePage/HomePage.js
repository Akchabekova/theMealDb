import React from 'react';
import RandomMeals from "../../components/RandomMeals";
import LatestMeals from "../../components/LatestMeals";
import Footer from '../../components/Footer';

const HomePage = () => {
    return (
        <div className="container">

            <div className="hero">
                <img src={"https://www.themealdb.com/images/meal-icon.png"} />
                <div className="hero-desc">
                <h1 className="hero-caption">Welcome to TheMealDB </h1>
                 <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                     We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
                    <img className="paypal-social" src={'https://gokkast.tips/wp-content/uploads/2015/05/PayPal-betaalwijze.png'}/>
                    <p>Click to Support $2 per month (cancel anytime)
                        Currently 750 supporters</p>
                </div>
                <img src={"https://www.themealdb.com/images/meal-icon.png"} />
            </div>
            <div className="line"></div>
            <input type="text"/>
            <div className="line"></div>
            <LatestMeals />
            <div className="line"></div>
            <RandomMeals />
            <Footer />
        </div >
    );
};

export default HomePage;