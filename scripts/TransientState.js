const transientState = {
    "metal": "", 
    "size": 0.0, 
    "style": "", 
    "cost": 0
}

export const setMetal = (chosenMetal) => {
    transientState.metal = chosenMetal
}

export const setSize = (chosenSize) => {
    transientState.size = chosenSize
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
}

//How to do cost? Is it done here?
