
//food options dropdown HTML
export const foodOptions = async () => {
    const response = await fetch('http://localhost:8088/foods')
    const response2 = await fetch('http://localhost:8088/foodLocations')
    const foods = await response.json()
    const foodLocations = response2.json()

//default HTML 

    let foodsHTML = `<select id="foods"><option>Please select a location first</option></select>`

 //generate html based on location 
 const handleLocationChange = (change) => {
    if (change.target.id === 'locations') {
            const foodsAvailable = foodLocations.filter((foodLocation) => foodLocation.locationId = change.target.id ) 
        
            foodsHTML = `<select id="foods"><option value=0>Select a Food Option</option>`

            const foodString = foodsAvailable.map((food) => {
                return `<option value="${food.id}">${food.name} - ${food.description} - $${food.price}</option>`
                }
            )
            foodsHTML += foodString.join("")
            foodsHTML += '</select>'
        }
    }
 //add event listener for location change
 document.addEventListener("change", handleLocationChange)
 return foodsHTML;
};