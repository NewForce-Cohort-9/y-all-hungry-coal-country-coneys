
//food options dropdown HTML
export const foodOptions = async () => {
    const response = await fetch('http://localhost:8088/foods')
    const response2 = await fetch('http://localhost:8088/foodLocations')
    const foods = await response.json()
    const foodLocations = await response2.json()

//default HTML 

    let foodsHTML = `<select id="foods"><option>Please select a location first</option></select>`

 //generate html based on location 
 const foodsAvailable = (change) => {
            const foodsAvailableArray = foodLocations.filter((foodLocation) => foodLocation.locationId === chosenLocationId) 
        
            foodsHTML = `<select id="foods"><option value=0>Select a Food Option</option>`

            const foodString = foodsAvailableArray.map((food) => {
                return `<option value="${food.id}">${food.name} - ${food.description} - $${food.price}</option>`
                }
            )
            foodsHTML += foodString.join("")
            foodsHTML += '</select>'
    }

    // handle location change
    let chosenLocationId = ''
    const handleLocationChangeForFoods = (change) => {
        if(change.target.id === 'location') {
            chosenLocationId = parseInt(change.target.id)
           foodsAvailable();

            const customEventFoods = new CustomEvent("newLocationSelectedFoods")
            document.dispatchEvent(customEventFoods)
        }
    };

    document.addEventListener("change", handleLocationChangeForFoods);

 //add custom event for location change and filtered food items


    return foodsHTML;
};