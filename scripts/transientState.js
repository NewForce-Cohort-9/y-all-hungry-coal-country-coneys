//add the required properties to the object below for your order
export const transientState = {
    "locationId": 0,
    "foodLocationId": 0,
    "dessertLocationId": 0,
    "drinkLocationId": 0,
    "toyLocationId": 0
}

//add the required setter functions to create your order
export const setLocationChoice = (chosenLocationId) => {
    transientState.locationId = chosenLocationId
    console.log(transientState)
}

export const setFood = (chosenFoodId) => {
    transientState.foodLocationId = chosenFoodId
    console.log(transientState)
}

export const setDrinkChoice = (chosenDrinkId) => {
    transientState.drinkId = chosenDrinkId
    console.log(transientState)
}

export const saveOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)

}

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions)
  const customEvent = new CustomEvent("newOrder")
  document.dispatchEvent(customEvent)

}