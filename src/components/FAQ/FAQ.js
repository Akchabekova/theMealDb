import React from 'react';

const Faq = () => {
    return (
        <div className="container">
            <img src={"https://www.themealdb.com/images/faq.png"} className="faq-img" />
            <h3 className="faq-title">How do I add a Recipe/Meal?</h3>
            <p className="faq-desc">All Patreon supporters get a link to add New meals, Just make sure you have a nice large JPG image to upload after you add them.</p>
            <h3 className="faq-title">How do I apply for an API key?</h3>
            <p className="faq-desc">If you are a developer, then you can use the test api key of '1' to get started.
                Once you have written your app you can sing up on Patreon and you will be sent a private key via email. API keys usually take a couple of hours.</p>
            <h3 className="faq-title">How do I upload an image?</h3>
            <p className="faq-desc">Just click the red upload image button and upload a picture that is square dimensions. We recomend 700x700 size.</p>
            <h3 className="faq-title">Are there any limits on the API?</h3>
            <p className="faq-desc">No limits, the API has unlimited usage.
            </p>
            <h3 className="faq-title">I'm have a commercial app, can I use the database?</h3>
            <p className="faq-desc">Yes! But we expect you to sign up on a commecial tier for Patreon support. This keeps our servers going and our service reliable.</p>




        </div>
    );
};

export default Faq;