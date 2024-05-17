import { saveOrder, transientState } from "./transientState.js"

// for order list

//handle food change 
const handleFoodChange = (changeFood) => {
    if(changeFood.target.id === 'foods') {
        const customEvent = new CustomEvent("foodChanged")
        document.dispatchEvent(customEvent)
        console.log("State Change HTML regenerating...")
       };
    };

export const selectedFood = async () => {
    const response = await fetch('http://localhost:8088/foodLocations?_expand=food');
    const foodLocations = await response.json();

    document.addEventListener("change", handleFoodChange);
    
    if (transientState.foodLocationId !== 0) {
        const foodSelected = foodLocations.find((foodLocation) =>
            foodLocation.id === transientState.foodLocationId)
    
       let foodSelectedHTML = `<div>${foodSelected?.food.name} <img src="${foodSelected?.food.pic}"></div>`
    
       return foodSelectedHTML;
    }
};

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
    
    if (transientState.toyLocationId !== 0) {
        const toySelected = toyLocations.find((toyLocation) =>
            toyLocation.id === transientState.toyLocationId)
    
       let toySelectedHTML = `<div>${toySelected?.toy.name} <img src="${toySelected?.toy.img}"></div>`
    
       return toySelectedHTML;
    }
};

export const customOrders = async () => {
//     // const fetchResponse = await fetch("http://localhost:8088/orders?_expand=food&_expand=drink&_expand=dessert&_expand=toy");
//     const orders = await fetchResponse.json();

    
//     let CustomOrdersHTML = orders.map((order) => {
//         const orderPrice = order.food.price + order.drink.price + order.dessert.price + order.toy.price
        
//         const totalCustomOrder = orderPrice.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD"
//         });
        
//         return `<div>Order #${order.id} cost ${totalCustomOrder}</div>`;
//     }

// );

//     return CustomOrdersHTML.join("")
}

//place order button html
const handleOrderPlacedClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrderButton") {
        saveOrder()
    }
}

export const saveOrderPlaced = () => {

document.addEventListener("click", handleOrderPlacedClick)

return "<div><button id ='saveOrderButton'>Place Order</button></div>"

}