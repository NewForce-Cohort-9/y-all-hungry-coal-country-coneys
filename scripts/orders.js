import { saveOrder } from "./transientState.js"

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


const handleOrderPlacedClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrderButton") {
        saveOrder()
    }
}

export const saveOrderPlaced = () => {

document.addEventListener("click", handleOrderPlacedClick)

return "<div><button id ='saveOrderButton'>Place Order</button></div>"

}