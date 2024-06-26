import { setDessert, transientState } from "./transientState.js";

//set global variables
let chosenLocationId = 0;
let chosenDessertLocationId = 0;


//handle location change
const handleLocationChange = (change) => {
    if (change.target.id === 'location') {
        chosenLocationId = transientState.locationId;
        
        //add custom event for location change and filtered food items
        const customEventFoods = new CustomEvent("newLocationSelectedFoods");
        document.dispatchEvent(customEventFoods);
    }
};
//handle dessert change
const handleDessertChange = (changeDessert) => {
    if (changeDessert.target.id === 'desserts') {
        setDessert(parseInt(changeDessert.target.value))
        chosenDessertLocationId = transientState.dessertLocationId;

    }
};

export const dessertOptions = async() => {
    const response = await fetch("http://localhost:8088/desserts")
    const response2 = await fetch("http://localhost:8088/dessertLocations")
    const desserts = await response.json()
    const dessertLocations = await response2.json()

    document.addEventListener("change", handleLocationChange)
    document.addEventListener("change", handleDessertChange)
    
    let html = ""

    const dessertsAvailableArray = dessertLocations.filter((dessertLocation) => dessertLocation.locationId === parseInt(chosenLocationId)) 

    html += `<select id="desserts"><option value=0>Select a Dessert Option</option>`

    for (let i=0; i < dessertsAvailableArray.length; i++) {
        for (const dessert of desserts) {
            if (dessertsAvailableArray[i].dessertId === dessert.id) {
               html += `<option value="${dessertsAvailableArray[i].id}" ${chosenDessertLocationId === dessertsAvailableArray[i].id ? 'selected' : ""}>
               ${dessert.name} - ${dessert.description} - $${dessert.price} - qty: ${dessertsAvailableArray[i].quantity}
               </option>`
            }
        }
    }
    html += "</select>"
    
    return html
}