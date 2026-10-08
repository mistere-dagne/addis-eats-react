//import Dish from "./Dish.jsx";
import menu from "./data.js";
//import Card from "./Card.jsx";
import {useState} from "react";
import CategoryBar from "./CategoryBar.jsx";
import DishList from "./DishList.jsx";



function Menu(){
  
   const [category,setCategory]= useState("All");

   const [total, setTotal]= useState(0);

   function addToOrder(price){
    setTotal(total + price) ;
   }

   const shown = category ==="All"?
   menu : menu.filter( (dish) => dish.category === category);


  return(
    <section>
    <h2>Our Menu</h2>

    <CategoryBar
      selected={category}
      onSelect={setCategory}
    />


    <DishList
      dishes={shown}
      onAdd={addToOrder}
      />

    <p>Order total: {total} ETB</p>

    </section>
  );
}

export default Menu;