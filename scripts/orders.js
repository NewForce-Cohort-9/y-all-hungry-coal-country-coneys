import { saveOrder, transientState } from "./transientState.js"

// for order list

//handle food change 
const handleFoodChange = (changeFood) => {
    if(changeFood.target.id === 'foods') {
        const customEvent = new CustomEvent("foodChanged")
        document.dispatchEvent(customEvent)
       };
    };

export const selectedFood = async () => {
    const response = await fetch('http://localhost:8088/foodLocations?_expand=food');
    const foodLocations = await response.json();

    document.addEventListener("change", handleFoodChange);
    
    let foodSelectedHTML = ''
    if (transientState.foodLocationId !== 0) {
        const foodSelected = foodLocations.find((foodLocation) =>
            foodLocation.id === transientState.foodLocationId)
    
       foodSelectedHTML = `<div>${foodSelected?.food.name} <img src="${foodSelected?.food.pic}"></div>`
    }
    return foodSelectedHTML;
};

//handle drink change
const handleDrinkChange = (changeDrink) => {
    if(changeDrink.target.id === 'drinks') {
        const customEvent = new CustomEvent("drinkChanged")
        document.dispatchEvent(customEvent)
       };
    };

export const selectedDrink = async () => {
    const response = await fetch('http://localhost:8088/drinkLocations?_expand=drink');
    const drinkLocations = await response.json();

    document.addEventListener("change", handleDrinkChange);
    
    let drinkSelectedHTML = ''
    if (transientState.drinkLocationId !== 0) {
        const drinkSelected = drinkLocations.find((drinkLocation) =>
            drinkLocation.id === transientState.drinkLocationId)
    
       drinkSelectedHTML = `<div>${drinkSelected?.drink.name} <img src="${drinkSelected?.drink.img}"></div>`
    }
    return drinkSelectedHTML;
};

//handle dessert change

const handleDessertChange = (changeDessert) => {
    if(changeDessert.target.id === 'desserts') {
        const customEvent = new CustomEvent("dessertChanged")
        document.dispatchEvent(customEvent)
        console.log("State Change HTML regenerating...")
       };
    };

export const selectedDessert = async () => {
    const response = await fetch('http://localhost:8088/dessertLocations?_expand=dessert');
    const dessertLocations = await response.json();

    document.addEventListener("change", handleDessertChange);

    let dessertSelectedHTML = ''
    if (transientState.dessertLocationId !== 0) {
        const dessertSelected = dessertLocations.find((dessertLocation) =>
            dessertLocation.id === transientState.dessertLocationId)

       dessertSelectedHTML = `<div>${dessertSelected?.dessert.name} <img src="${dessertSelected?.dessert.pic}"></div>`
    }
    return dessertSelectedHTML;
};

//handle toy change

const handleToyChange = (changeToy) => {
    if(changeToy.target.id === 'toys') {
        const customEvent = new CustomEvent("toyChanged")
        document.dispatchEvent(customEvent)
       };
    };

export const selectedToy = async () => {
    const response = await fetch('http://localhost:8088/toyLocations?_expand=toy');
    const toyLocations = await response.json();

    document.addEventListener("change", handleToyChange);
    
    let toySelectedHTML = ''
    if (transientState.toyLocationId !== 0) {
        const toySelected = toyLocations.find((toyLocation) =>
            toyLocation.id === transientState.toyLocationId)
    
    toySelectedHTML = `<div>${toySelected?.toy.name} <img src="${toySelected?.toy.img}"></div>`
    
    }
    return toySelectedHTML;
};

// for order total 

let foodCost = 0;
let drinkCost = 0;
let dessertCost = 0;
let toyCost = 0;
let orderTotalAmount = 0;

export const orderTotal = async () => {
    const response = await fetch('http://localhost:8088/foodLocations?_expand=food');
    const foodLocations = await response.json();
    const response2 = await fetch('http://localhost:8088/drinkLocations?_expand=drink');
    const drinkLocations = await response2.json();
    const response3 = await fetch('http://localhost:8088/dessertLocations?_expand=dessert');
    const dessertLocations = await response3.json();
    const response4 = await fetch('http://localhost:8088/toyLocations?_expand=toy');
    const toyLocations = await response4.json();

    document.addEventListener("change", handleFoodChange);
    document.addEventListener("change", handleDrinkChange);
    document.addEventListener("change", handleDessertChange);
    document.addEventListener("change", handleToyChange);

    let orderTotalString = '<div>'

    if (transientState.foodLocationId !== 0) {
        const foodSelected = foodLocations.find((foodLocation) =>
            foodLocation.id === transientState.foodLocationId)

        foodCost = foodSelected?.food.price
    }

    if (transientState.drinkLocationId !== 0) {
        const drinkSelected = drinkLocations.find((drinkLocation) =>
            drinkLocation.id === transientState.drinkLocationId)

        drinkCost = drinkSelected?.drink.price
    }

    if (transientState.dessertLocationId !== 0) {
        const dessertSelected = dessertLocations.find((dessertLocation) =>
            dessertLocation.id === transientState.dessertLocationId)

        dessertCost = dessertSelected?.dessert.price
    }

    if (transientState.toyLocationId !== 0) {
        const toySelected = toyLocations.find((toyLocation) =>
            toyLocation.id === transientState.toyLocationId)

        toyCost = toySelected?.toy.price
    }

    orderTotalAmount = foodCost + drinkCost + dessertCost + toyCost
    const orderFormatted = orderTotalAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
    orderTotalString += orderFormatted
    orderTotalString += '</div>'
    return orderTotalString
}

//display order on DOM
    export const customOrders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders");
    const orders = await fetchResponse.json();

    const totalCustomOrder = orderTotalAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
        return `<div>Order # cost ${totalCustomOrder}</div>`;
}

//place order button html
const handleOrderPlacedClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrderButton") {
        saveOrder()
    }
}

export const saveOrderPlaced = () => {

document.addEventListener("click", handleOrderPlacedClick)

return `<div><button type="button" id="saveOrderButton" class="btn btn-primary btn-lg">Place Order</button></div>`

}