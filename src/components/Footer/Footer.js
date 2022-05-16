import React from 'react';
import About from "../../pages/About";
import FAQ from "../FAQ";
import Contact from "../Contact";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row-footer">
                    <div className="col-4-footer-desc">
                        <p className="footer-desc">© 2022 TheMealDB
                            Proudly built in the UK</p>
                        <img src={"https://www.themealdb.com/images/icons/flags/big/16/gb.png"}/>
                    </div>
                    <div className="col-4-footer-img">
                        <img src={"https://www.themealdb.com/images/logo-tcdb.png"}  className="footer-img"/>
                        <img src={"https://www.themealdb.com/images/logo-tadb.png"}  className="footer-img"/>
                        <img src={"https://www.themealdb.com/images/logo-tsdb.png"}   className="footer-img"/>
                    </div>
                    <div className="col-4-footer-contact">
                        <Link to={"/about"}>
                        <div className="footer-about">About</div>
                        </Link>
                        <Link to={"/faq"}>
                        <div className="footer-faq"> < FAQ /></div>
                        </Link>
                        <Link to={"/contact"}>
                       <div className="footer-contact"> <Contact/></div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;