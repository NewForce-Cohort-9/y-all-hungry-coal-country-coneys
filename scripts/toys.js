import { transientState } from "./transientState.js";
import { setToy } from "./transientState.js";

//set global variables
let chosenLocationId = 0

//handle location change
const handleLocationChangeForToys = (change) => {
    if(change.target.id == 'location') {
        chosenLocationId = transientState.locationId;
//add custome event for location change and filtered toys
        const customEventToys = new CustomEvent("newLocationSelectedToys");
        document.dispatchEvent(customEventToys);
    }
}

//handle change of toy option
const handleToyChange = (changeToy) => {
    if(changeToy.target.id === 'toys') {
        setToy(parseInt(changeToy.target.value))
    }
}

//create html based on selected location
export const ToyOptions = async (change) => {

    const response = await fetch('http://localhost:8088/toys');
    const responseToys = await fetch('http://localhost:8088/toyLocations');
    const toys = await response.json();
    const toyLocations = await responseToys.json();

    document.addEventListener("change", handleLocationChangeForToys);
    document.addEventListener("change", handleToyChange);
    

    let toysHTML = '';

    //filters foods at location
    const toysAvailableArray = toyLocations.filter((toyLocation) => toyLocation.locationId === parseInt(chosenLocationId)) 

    
    toysHTML = `<select id="toys"><option value=0>Select a Toy Option</option>`

    for (let i=0; i < toysAvailableArray.length; i++) {
        for (const toy of toys) {
            if (toysAvailableArray[i].toyId === toy.id) {
               toysHTML += `<option value="${toysAvailableArray[i].id}">
               ${toy.name} - $${toy.price} - qty: ${toysAvailableArray[i].quantity}
               </option>`
            }
        }
    }
    toysHTML += '</select>';

    return toysHTML;
};