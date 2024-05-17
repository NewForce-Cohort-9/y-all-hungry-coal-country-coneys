//import function
import { LocationOptions } from "./locations.js"
import { drinkOptions } from "./drinks.js";
import { foodOptions } from "./foods.js";
import { ToyOptions } from "./toys.js"

//query selector
const container = document.querySelector('#container');

//render function
const render = async () => {
    // add variables to generate HTML
    const locationOptionsHTML = await LocationOptions()
    const toysHTML = await ToyOptions();
    const Foods = await foodOptions();
    const Drinks = await drinkOptions()
    //main HTML string
    const containerHTML = `
    <article class="choices">
        <section id="location">
            <h2>Choose A Pickup Location</h2>
            ${locationOptionsHTML}
            <p id="selectedLocation"></p>
        </section>
        <section id="food" class="choices_item">
            <h2>Food</h2>
            ${Foods}
        </section>
        <section id="drink" class="choices_item">
        <h2>Drink</h2>
            ${Drinks}
        </section>
        <section id="dessert" class="choices_item">
            <h2>Dessert</h2>

        </section>
        <section id="toy" class="choices_item">
            <h2>Toy</h2>
            ${toysHTML}
        </section>
    </article>
    <article class="orders">
    <div class="orders_list">
        <h2>Your Current Order:</h2>

    </div>
    <div class="orderTotal">
        <h2>Your Current Order Total: </h2>
    </div>
    </article>
    <article class="buttons">
  
        <div class="placeOrder">
        
        </div>
        <div class="startOver">
        
        </div>
    </article>
    `
    container.innerHTML = containerHTML;
}

document.addEventListener("newLocationSelectedFoods", render);
document.addEventListener("newLocationSelectedDrinks", render);
document.addEventListener("newLocationSelectedToys", render);

render();