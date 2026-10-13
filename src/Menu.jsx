//import Dish from "./Dish.jsx";
//import menu from "./data.js";
//import Card from "./Card.jsx";
import {useState} from "react";
import CategoryBar from "./CategoryBar.jsx";
import DishList from "./DishList.jsx";
import OrderForm from "./OrderForm.jsx";
import {useEffect} from "react";
import {loadDishes} from "./api.js";
import {useRef} from "react";


function Menu(){
  
   const [category,setCategory]= useState("All");

   const [total, setTotal]= useState(0);

   const [dishes, setDishes] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const [search, setSearch] = useState("")
   const searchRef = useRef(null)
   const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(search.toLowerCase())
    );
  

   function addToOrder(price){
    setTotal(total + price) ;
   }

  //  const shown = category ==="All"?
  //  menu : menu.filter( (dish) => dish.category === category);
  
  useEffect(()=> {
    const ctrl = new AbortController();

      async function load(){
        try{
          setLoading(true);
          setError(null);

          const result = await loadDishes(category, ctrl.signal);
          setDishes(result);
        } catch (e){
          if(e.name !== "AbortError"){
          setError(e.message); }
        } finally{
          if (!ctrl.signal.aborted){
          setLoading(false); }
        }
    }
    load();

    return () => ctrl.abort(); //cleanup function

  }, [category]
  );

  useEffect(() => {
    if (!loading && !error && searchRef.current) {
      searchRef.current.focus();
    }
    }, [loading, error]
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

    <input
      ref={searchRef}
      type="search"
      placeholder="Search dishes"
      aria-label="Search dishes"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      />

    <CategoryBar
      selected={category}
      onSelect={setCategory}
    />

    {dishes.length === 0 ? (
      <p>No dishes in this category yet.</p>
    ) : filteredDishes.length === 0 ? (
      <p>No dishes match your search.</p>
    ) : (
    <DishList
      // dishes={shown}
      dishes={filteredDishes}
      onAdd={addToOrder}
      />
    ) }

    <p>Order total: {total} ETB</p>

    <OrderForm/>

    </section>
  );
}

export default Menu;