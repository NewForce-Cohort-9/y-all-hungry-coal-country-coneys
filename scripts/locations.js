import { setLocationChoice } from "./transientState.js"

const handleLocationChoice = (changeEvent) => {
    if (changeEvent.target.id === "location") {
       const chosenOption = parseInt(changeEvent.target.value)
       setLocationChoice(chosenOption)
    }
 }



 export const LocationOptions = async () => {
    const response = await fetch("http://localhost:8088/locations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChoice)


    let locationChoiceHTML = ""

    locationChoiceHTML += "<select id='location'>"
    locationChoiceHTML += "<option value='0'>Food Truck Location</option>"

    const optionsArray = locations.map(
        (location) => {
            return `<option value="${location.id}">${location.cityStreet}</option>`
        }
    )
    
    locationChoiceHTML += optionsArray.join("")
    locationChoiceHTML += "</select>"
    
    locationChoiceHTML +=  `<p id='selectedLocation'></p>`


    return locationChoiceHTML
}