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
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
  

   function addToOrder(price){
    setTotal(total + price) ;
   }

  //  const shown = category ==="All"?
  //  menu : menu.filter( (dish) => dish.category === category);
  
  useEffect(()=> {
      async function load(){
        try{
          setLoading(true);
          setError(null);

          const result = await loadDishes("All");
          setDishes(result);
        } catch (e){
          setError(e.message);
        } finally{
          setLoading(false);
        }
    }
    load();
  }, []
  );

  if (loading){
    return(
      <p>Loading menu ...</p>
    )
  }
  if (error) {
    return(
      <p className="err">{error}</p>
    )
  }

  if (dishes.length === 0){
    return(
      <p>No dishes yet</p>
    )
  }

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