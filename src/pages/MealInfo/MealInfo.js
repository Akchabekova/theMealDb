import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const MealInfo = () => {
    const {id} = useParams()
    const [meal, setMeal] = useState({})
    const[ingredients, setIngredients] = useState([]);
    const getIngredients = (meal) =>{
        let result = []
        for(let i = 0; i < 20; i++){
            if(meal[`strIngredient${i +1}`]){
                result =[...result,meal[`strIngredient${i + 1}`]]
            }
        }
        setIngredients(result)
    }
    useEffect(() =>{
        axios(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setMeal(res.data.meals[0])
                getIngredients(res.data.meals[0])
            })
    },[])
    return (
        < div className="container">
            <div className="row">
            <div className="col-5">
                <h3 className="mealInfo-title">{meal.strMeal}</h3>
            <img  className="img-mealInfo" src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <div className="col-5">
               <h3 className="ingredient-caption">Ingredients:</h3>
                <div className="row">
                    <div className="col-4">
            {
                ingredients.map((ingredient,idx) => (
                    <div  key={idx} className="ingredient-title">
                        <img  className='ingredient-img' src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=" "/>
                        <div className="ingredients-name">{ingredient }</div>
                    </div>
                ))

            }
                    </div>
                </div>
            </div>
                <p className="line-info"></p>
                <h3 className="instruction-info">Instruction</h3>
                <div className="instruction-desc">{meal.strInstructions}</div>
                {/*<ReactPlayer  url={meal.strYoutube} />*/}
        </div>
        </div>
    );
};

export default MealInfo;