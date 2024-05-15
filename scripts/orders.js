

export const customOrders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=food&_expand=drink&_expand=dessert&_expand=toy");
    const orders = await fetchResponse.json();

    
    let CustomOrdersHTML = orders.map((order) => {
        const orderPrice = order.food.price + order.drink.price + order.dessert.price + order.toy.price
        
        const totalCustomOrder = orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
        
        return `<div>Order #${order.id} cost ${totalCustomOrder}</div>`;
    }

);

    return CustomOrdersHTML.join("")
}