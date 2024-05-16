

//import your transient state
import { setDrinkChoice } from "./transientState.js";


//export your data from the data base and get your array

export const drinkOptions = async () => {
    const response = await fetch("http://localhost:8088/drinks")
    //const response2 = await fetch("http://localhost:8088/drinkLocations")
    const drinks = await response.json()


 //html to print your drop down menu and options for drinks


    let drinkOptionsHTML = `<select id="singleDrink">
   
    <option value="0">Select Drink</option>
  
   `

    const drinkSelection = drinks.map(
    singleDrink => {
        return `<option value="${singleDrink.id}">${singleDrink.name}</option>`  
    }
)
    drinkOptionsHTML += drinkSelection.join("")

    drinkOptionsHTML += "</select>"
   

    return drinkOptionsHTML

};
  