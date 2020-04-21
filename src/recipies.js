import React from 'react';
import style from './recipe.module.css'

let Recipie = ({name,image,ingredients,calories,weight,time})=>{
    return(
        <React.Fragment>
        <div className={style.recipe}>
            <div>{name}</div>
            <div><img className={style.image} src={image} alt={name} title={name}></img></div>
            <ol>
                {
                    ingredients.map((ingredient,i)=>(
                        <li key={i}>{ingredient.text} </li>
                    ))
                }
            </ol>
            <div>calories: {calories}</div>
            <div>weight: {weight}</div>
        </div>

        </React.Fragment>
        
    )
}

export default Recipie;