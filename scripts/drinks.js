import { transientState } from "./transientState.js";
import { setDrinkChoice } from "./transientState.js";

let chosenLocationId = 0;

const handleLocationChangeForDrinks = (change) => {
    if(change.target.id === 'location') {
        chosenLocationId = transientState.locationId;
        const customEventDrinks = new CustomEvent("newLocationSelectedDrinks")    
        document.dispatchEvent(customEventDrinks);
    }
}
     const handleDrinkChange = (changeDrink) => {
        if(changeDrink.target.id === 'drinks') {
            setDrinkChoice(parseInt(changeDrink.target.value))
        }
    }
export const drinkOptions = async (change) => {
    const response = await fetch('http://localhost:8088/drinks');
    const response2 = await fetch('http://localhost:8088/drinkLocations');
    const drinks = await response.json();
    const drinkLocations = await response2.json();

    document.addEventListener("change", handleLocationChangeForDrinks);
    document.addEventListener("change", handleDrinkChange);

    let drinkOptionsHTML ='';

    const drinksAvailableArray = drinkLocations.filter((drinkLocation) => drinkLocation.locationId === parseInt(chosenLocationId))
    
    drinkOptionsHTML = '<select id="drinks"><option value=0>Select a Drink Option</option>'

    for (let i=0; i < drinksAvailableArray.length; i++) {
        for (const drink of drinks) {
            if (drinksAvailableArray[i].drinksId === drink.id) {
               drinkOptionsHTML += `<option value="${drinksAvailableArray[i].id}">
               ${drink.name} - ${drink.description} - $${drink.price} - qty: ${drinksAvailableArray[i].quantity}
               </option>`
            }
        }
    }
    drinkOptionsHTML += '</select>';

    return drinkOptionsHTML;
};
  