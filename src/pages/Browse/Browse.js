import React, {useEffect, useId, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from 'axios'

const Browse = () => {
    const{name} = useParams()
    const [browse,setBrowse] = useState([])
    useEffect(() =>{
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) => setBrowse(data.meals) )
    },[])
    return (
        <div className="container">
            <div className="browse-title" >Browse Meal </div>
            <div className="row browse">

            {
            browse.map((meal) => (
                <div className="col-3" key={meal.idMeal}>
                    <Link to={`/meal/${meal.idMeal}`}>
                        <img src={meal.strMealThumb} alt="{meal.idMeal}" />
                        <h4 className="meal-desc">{meal.strMeal}</h4>
                    </Link>

                </div>
            ))
            }
            </div>
        </div>
    );
};

export default Browse;