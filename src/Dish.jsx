import PropTypes from "prop-types";
import { useState } from "react";

function Dish ({name,price, currency= "ETB", spicy=false}){  //destructuring
    
    const[count,setCount]= useState(0);

    return(
        <div className ="dish">
            <h3>{name} {spicy && <span>Spicy</span>}</h3>
            <p>{price} {currency} </p>
            <button onClick={()=>setCount(count+1)} >Add</button>
            <p>{count}</p>
            
        </div>
    );
};

Dish.propTypes= {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
};

export default Dish;