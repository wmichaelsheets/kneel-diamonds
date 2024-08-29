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
}

export const setSize = (chosenSize) => {
    transientState.size = chosenSize
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
}

// Placeholder for cost calculation. May need to be done elsewhere since this module is not DB aware.
//export const setCost = (calculatedCost)

// Function to convert transient state to permanent state
