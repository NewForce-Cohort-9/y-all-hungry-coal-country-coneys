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