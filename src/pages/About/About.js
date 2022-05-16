import React from 'react';
import Footer from "../../components/Footer";


const About = () => {
    return (
        < div className="container-footer">
        <div>
      <h3 className="footer-info-title">About</h3>
        </div>
    <p className="footer-info-desc">TheMealDB was built in 2016 to provide a free data source api for recipes online
        in the hope that developers would build applications and cool projects ontop of it.
        TheMealDB originated on the Kodi forums as a way to browse recpies on your TV.</p>
            <p className="footer-info-desc">Kodi Add-on</p>
            <img src="https://raw.githubusercontent.com/zag2me/script.screensaver.themealdb/master/icon.png" className="about-img"/>
         <Footer />

        </div>
    );
};

export default About;