import { setLocationChoice } from "./transientState.js"

const response = await fetch("http://localhost:8088/locations")
const locations = await response.json()

    // Creating function for location change event and string output conditional based on 'value' attribute
const handleLocationChoice = (changeEvent) => {
    let result = document.querySelector('#selectedLocation')

    if (changeEvent.target.id === "location") {
        let vArray = changeEvent.target.value.split("_")
       const chosenOption = parseInt(vArray[0])
       setLocationChoice(chosenOption)
    if (chosenOption > 0) {
        console.log(vArray[1])
    result.textContent = `You're picking up your order at our ${vArray[1]} Location`
    }
    else (
        result.textContent = ""
    )
    }
    
 }

    // Exporting function for main.js HTML addition
 export const LocationOptions = async () => {

    document.addEventListener("change", handleLocationChoice)


    let locationChoiceHTML = ""

    locationChoiceHTML += "<select id='location'>"
    locationChoiceHTML += "<option value='0'>Food Truck Location</option>"

    const optionsArray = locations.map(
        (location) => {
            return `<option value="${location.id}_${location.cityStreet}">${location.cityStreet}</option>`
        }
    )
    
    locationChoiceHTML += optionsArray.join("")
    locationChoiceHTML += "</select>"
    

    return locationChoiceHTML

 }