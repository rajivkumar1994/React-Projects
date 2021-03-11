import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  // Destructuring label, calories, image and ingredients
  // console.log("Props : ", props);
  return (
    <div className={styles.recipe}>
      <h1> {title} </h1>
      <ol>
        {ingredients.map(ingredient => (
          <li> {ingredient.text} </li>
        ))}
      </ol>
      <p> Calories {calories} </p>
      <img src={image} alt="" className={styles.image} />
    </div>
  );
};

export default Recipe;
