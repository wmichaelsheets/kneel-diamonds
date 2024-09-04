// Set up the transient state data structure and provide initial values
const transientState = {
    "metalId": "", 
    "sizeId": 0.0, 
    "styleId": ""
}

// Functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

// Placeholder for cost calculation. May need to be done elsewhere since this module is not DB aware.
//export const setCost = (calculatedCost)





// Function to convert transient state to permanent state
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

const customEvent = new CustomEvent("newOrderCreated")
document.dispatchEvent(customEvent)
}

