export const foodOptions = async () => {
    const response = await fetch('http:localhost:8088/foods')
    const foods = await response.json()
}