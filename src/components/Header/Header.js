import React from 'react';
import {Link} from "react-router-dom";
import HomePage from "../../pages/HomePage";


const Header = () => {
    return (
        <div className="Header">
       <div className="container">
        <div className="header-desc">
            <div className="logo-img">
                <Link to="/">
                <img src="https://www.themealdb.com/images/logo-small.png" />
                    < /Link>
            </div>
            <div className="logo-contact">
                <Link to={"/"}>
                <div className="header-desc">Home</div>
                  </Link>
                <div className="header-desc" >API</div>
                <div className="header-desc">Forum</div>
                <img className="header-social" src={"https://www.themealdb.com/images/facebook_icon.png"}/>
                <img className="header-social" src={"https://www.themealdb.com/images/twitter_icon.png"}/>
                <input type='text' />
            </div>
        </div>
       </div>
        </div>

    );
};

export default Header;