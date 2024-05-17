// for order list
export const setFood = async (foodSelected) => {
    const response = await fetch('http://localhost:8088/foodLocations?_expand=food');
    const foodLocations = await response.json();
    
    const foodSelectedHTML = `<div>TEST</div>`

    return foodSelectedHTML
}