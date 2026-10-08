import Dish from "./Dish.jsx";
import Card from "./Card.jsx";

function DishList({dishes}){
    if (dishes.length === 0){
        return(
            <p>No Dishes in this category yet. </p>
        )
    }
    
    return(
        <div>
            { dishes.map ( (dish) => (
            <Card key={dish.id}>
                <Dish 
                    name={dish.name}
                    price={dish.price}
                    spicy={dish.spicy}
                />
            </Card>
        ) 
    )}  
        </div>
    )
}

export default DishList;