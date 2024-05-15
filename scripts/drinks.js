export const drinkOptions = async () => {
    const response = await fetch("http://localhost:8088/drinks")
    //const response2 = await fetch("http://localhost:8088/drinkLocations")
    const drinks = await response.json()


    // const handleLocationChange - () =. {

    // }
    
    // const changeHandler = (changeEvent) => {
    //     if (changeEvent.target.id === "singleDrink") {
    //        const chosenOption = changeEvent.target.value
    //        console.log(parseInt(chosenOption))
    //     }
    //  }



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
  