import PropTypes from "prop-types";
import { useState } from "react";

function Dish ({name,price, currency= "ETB", spicy=false, onAdd}){  
    
    const[count,setCount]= useState(0);

    return(
        <div className ="dish">
            <h3>{name} {spicy && <span>Spicy</span>}</h3>
            <p>{price} {currency} </p>
            <button onClick= { () => {
                setCount(count+1);
                onAdd(price);   }
            } >Add</button>
            <span> {count}</span>   
        </div>
    );
};

Dish.propTypes= {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
    currency: PropTypes.string,
    onAdd: PropTypes.func.isRequired,
};

export default Dish;