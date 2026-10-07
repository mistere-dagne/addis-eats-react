import Dish from "./Dish.jsx";
import menu from "./data.js";
import Card from "./Card.jsx";



function Menu({category}){

    // const category="Main"; //temporarly 

    const shown = category? menu.filter(
        (dish) => dish.category === category
    ): menu;

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

    { shown.map (
        (dish) => (
            <Card key={dish.id}>
                <Dish name={dish.name}
                price={dish.price}
                spicy={dish.spicy}
                />
            </Card>
        ) // made into array of components 
    )} 
    </section>
  );
}

export default Menu;