import { setDessert } from "./transientState.js";

const handleLocationChange = (event) => {
    if (event.target.id === "location") {
        setLocation(parseInt(event.target.value))
    }
}

const handleDessertChange = (event) => {
    if (event.target.id === "dessert") {
        setDessert(parseInt(event.target.value))
    }
}

export const dessertOptions = async() => {
    const response = await fetch("http://localhost:8088/desserts")
    const desserts = await response.json()
    document.addEventListener("change", handleLocationChange)
    document.addEventListener("change", handleDessertChange)
    let html = ""

    html += '<select id="dessert">'
    html += '<option value="0">Select a dessert</option>'

    const dessertChosen = desserts.map( (dessert) => {
            return `<option value="${dessert.id}">${dessert.name}</option>`
        }
    )

    html += dessertChosen.join("")
    html += "</select>"
    return html
}