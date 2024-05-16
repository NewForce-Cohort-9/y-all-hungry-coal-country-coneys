import { setDessert } from "./transientState.js";
import {setLocationChoice} from "./transientState.js"

const handleLocationChange = (event) => {
    if (event.target.id === "location") {
        setLocationChoice(parseInt(event.target.value))
    }
}

const handleDessertChange = (event) => {
    if (event.target.id === "dessert") {
        setDessert(parseInt(event.target.value))
    }
}

export const dessertOptions = async() => {
    const response = await fetch("http://localhost:8088/desserts")
    const response2 = await fetch("http://localhost:8088/dessertLocations")
    const desserts = await response.json()
    const dessertLocations = await response2.json()
    document.addEventListener("change", handleLocationChange)
    document.addEventListener("change", handleDessertChange)
    let html = ""

    html += '<select id="dessert">'
    html += '<option value="0">Select a dessert</option>'

    const dessertChosen = desserts.map( (dessert) => {
            return `<option value="${dessert.id}">${dessert.name} - ${dessert.description} - ${dessert.price}</option>`
        }
    )
    // const chosenLocation = dessertLocations.map((dessertLocation) => {
    //     if dessertLocation.locationId
    // })

    html += dessertChosen.join("")
    html += "</select>"
    return html
}