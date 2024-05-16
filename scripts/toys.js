import { setToy } from "./transientState.js";



const handleToyChange = (change) => {
    if(change.target.id === 'toys') {
        setToy(parseInt(change.target.value))
    }
}

export const ToyOptions = async () => {

    const response = await fetch('http://localhost:8088/toys')
    const toys = await response.json()

    document.addEventListener("change", handleToyChange)
    

    let toysHTML = '<select id="toys"><option value=0>Choose a Happy Toy</option>'


    const toysString = toys.map((toy) => {
            return `<option value="${toy.id}">${toy.name}  - $${toy.price}
            </option>`
        }
    )


    toysHTML += toysString.join("")
    toysHTML += '</select>'

    return toysHTML

};