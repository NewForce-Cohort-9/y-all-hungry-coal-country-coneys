//import functions 
import { foodOptions } from "./foods.js";
import { LocationOptions } from "./locations.js"

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
            <p id="selectedLocation"></p>
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

        </section>
        <section id="toy" class="choices_item">
        <h2>Toy</h2>

        </section>
    </article>
    <article class="orders">
    <div class="orders_list">
    
    </div>
    <div class="orderTotal">
    
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

render();