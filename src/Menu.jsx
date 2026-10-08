import Dish from "./Dish.jsx";
import menu from "./data.js";
import Card from "./Card.jsx";
import {useState} from "react";
import CategoryBar from "./CategoryBar.jsx";
import DishList from "./DishList.jsx";



function Menu(){
  
   const [category,setCategory]= useState("All");

   const shown = category ==="All"?
   menu : menu.filter( (dish) => dish.category === category);

    if (shown.length === 0) {
    return (
      <section>
        <h2>Our Menu</h2>
        <p>No {category} dishes.</p>
      </section>
    );
    }


  return(
    <section>
    <h2>Our Menu</h2>

    <CategoryBar
      selected={category}
      onSelect={setCategory}
    />

    <DishList
      dishes={shown} />

    </section>
  );
}

export default Menu;