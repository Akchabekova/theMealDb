import React from 'react';
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div className="container">
            <h3 className="contact-title">Contact</h3>
            <p className="contact-desc">Email: thedatadb@gmail.com</p>
            <p className="contact-desc">Related sites:</p>
            <Link to="/theaudiodb">
            <img src={"https://www.theaudiodb.com/images/logo.png"} className="contact-link"/>
            </Link>
            <Link to="/themealdb">
                <img src={"https://www.themealdb.com/images/logo.png"} className="contact-link"/>
            </Link>
            <Link to="/thesportsdb">
            <img src={"https://www.thesportsdb.com/images/logo.png"}  className="contact-link"/>
            </Link>


        </div>
    );
};

export default Contact;