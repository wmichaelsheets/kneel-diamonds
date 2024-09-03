// Set up the transient state data structure and provide initial values
const transientState = {
    "metal": "", 
    "size": 0.0, 
    "style": "", 
    "cost": 0
}

// Functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metal = chosenMetal
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.size = chosenSize
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
    console.log(transientState)
}

// Placeholder for cost calculation. May need to be done elsewhere since this module is not DB aware.
//export const setCost = (calculatedCost)

//call transient state
//map chosen metal, size, and style to each cost
//accumulate the cost



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
}

