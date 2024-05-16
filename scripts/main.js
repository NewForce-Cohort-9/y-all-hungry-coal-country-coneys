//import functions 
import {dessertOptions} from "./desserts.js"
import { customOrders } from "./orders.js"
import { foodOptions } from "./foods.js";
import { LocationOptions } from "./locations.js"
import {saveOrderPlaced} from "./orders.js"

//query selector
const container = document.querySelector('#container');

//render function
const render = async () => {
    // add variables to generate HTML
    
    const locationOptionsHTML = await LocationOptions();
    const Foods = await foodOptions();

    //main HTML string
    const containerHTML = `
    <article class="choices">
        <section id="location">
            <h2>Choose A Pickup Location</h2>
            ${locationOptionsHTML}
        </section>
        <section id="food" class="choices_item">
        <h2>Food</h2>
        ${Foods}
        </section>
        <section id="drink" class="choices_item">
        <h2>Drink</h2>

        </section>
        <section id="dessert" class="choices_item">
        <h2>Dessert</h2>
        ${dessertHTML}
        </section>
        <section id="toy" class="choices_item">
        <h2>Toy</h2>

        </section>
    </article>
    <article class="orders">
    <div class="orders_list">
    ${ordersHTML}
    </div>
    <div class="orderTotal">
    
    </div>
    </article>
    <article class="buttons">
  
        <div class="placeOrder">
        ${orderButtonHTML }
        </div>
        <div class="startOver">
        
        </div>
        </article>
    `
    container.innerHTML = containerHTML;
}

document.addEventListener("newLocationSelectedFoods", render);

render();