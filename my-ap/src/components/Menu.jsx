import {PizzaComponent} from "./PizzaComponent"
import {pizzaData} from "../data.js"
export const Menu = () => {
console.log(pizzaData);

    return(
    <div>
        <h3>Menu</h3>
        <PizzaComponent
               title={pizzaData [0].name}
               description={pizzaData[0].ingredients}
               price={pizzaData [0].price}
               img={pizzaData [0].photoName}
               />
    </div>
)

}