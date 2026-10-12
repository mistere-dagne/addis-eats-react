//import Dish from "./Dish.jsx";
//import menu from "./data.js";
//import Card from "./Card.jsx";
import {useState} from "react";
import CategoryBar from "./CategoryBar.jsx";
import DishList from "./DishList.jsx";
import OrderForm from "./OrderForm.jsx";
import {useEffect} from "react";
import {loadDishes} from "./api.js" 


function Menu(){
  
   const [category,setCategory]= useState("All");

   const [total, setTotal]= useState(0);

   const [dishes, setDishes] = useState([]);
  

   function addToOrder(price){
    setTotal(total + price) ;
   }

  //  const shown = category ==="All"?
  //  menu : menu.filter( (dish) => dish.category === category);
  
  useEffect(()=> {
      async function load(){
        const result = await loadDishes("All");
        setDishes(result);
    }
    load();
  }, []
  );

  return(
    <section>
    <h2>Our Menu</h2>

    <CategoryBar
      selected={category}
      onSelect={setCategory}
    />


    <DishList
      // dishes={shown}
      dishes={dishes}
      onAdd={addToOrder}
      />

    <p>Order total: {total} ETB</p>

    <OrderForm/>

    </section>
  );
}

export default Menu;