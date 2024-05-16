import { transientState } from "./transientState.js";
import { setFood } from "./transientState.js";

// set global variables
let chosenLocationId = 0;

// handle location change
const handleLocationChangeForFoods = (change) => {
    if(change.target.id === 'location') {
        chosenLocationId = transientState.locationId;
//add custom event for location change and filtered food items
        const customEventFoods = new CustomEvent("newLocationSelectedFoods");
        document.dispatchEvent(customEventFoods);
    }
};

//handle food change - **************
const handleFoodChange = (changeFood) => {
    if(changeFood.target.id === 'foods') {
        setFood(parseInt(changeFood.target.value))
    }
};

//generate html based on location 
export const foodOptions = async (change) => {
    const response = await fetch('http://localhost:8088/foods');
    const response2 = await fetch('http://localhost:8088/foodLocations');
    const foods = await response.json();
    const foodLocations = await response2.json();

    document.addEventListener("change", handleLocationChangeForFoods);
    document.addEventListener("change", handleFoodChange);

    let foodsHTML='';

    // filter for foods at location
    const foodsAvailableArray = foodLocations.filter((foodLocation) => foodLocation.locationId === parseInt(chosenLocationId)) 
   
    //join foodIds and render new HTML for foods available dropdown
    foodsHTML = `<select id="foods"><option value=0>Select a Food Option</option>`

    for (let i=0; i < foodsAvailableArray.length; i++) {
        for (const food of foods) {
            if (foodsAvailableArray[i].foodId === food.id) {
               foodsHTML += `<option value="${foodsAvailableArray[i].id}">
               ${food.name} - ${food.description} - $${food.price} - qty: ${foodsAvailableArray[i].quantity}
               </option>`
            }
        }
    }
    foodsHTML += '</select>';

    return foodsHTML;
};