import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"



const Header = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState("")
    const handleChange = (e) => setSearch(e.target.value)
    const handleSearch = (e) => {
        if(e.key === "Enter"){
            navigate(`/browse/${search}`)
            setSearch("")
        }
    }
    return (
        <div className="header">
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
                <input type='text' onChange={handleChange} onKeyPress={handleSearch}  placeholder={"Search"} value={search}/>
                <Link  to={`/browse/${search}`} className="input-header">Search</Link>

            </div>
        </div>
       </div>
        </div>

    );
};

export default Header;