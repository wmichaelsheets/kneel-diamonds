import { setMetal } from "./TransientState.js"

const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        setMetal(parseInt(changeEvent.target.value))
    }
}



export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metal = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalOptionsHTML = ""

    const divStringArray = metal.map(
        (metal) => {
            return `<div>
                <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
            </div>`
    }
)
    metalOptionsHTML += divStringArray.join("")
    
    return metalOptionsHTML
}


// THIS IS HOW IT WAS DONE WITH A FOR. .OF LOOP. REDONE BELOW W/ MAP
// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metal = await response.json()

//     document.addEventListener("change", handleMetalChange)

//     let metalOptionsHTML = "<ul>"
//     for (const metals of metal) {
//         metalOptionsHTML += `<input type='radio' name='metal' value='${metals.id}' /> ${metals.metal}`

//         metalOptionsHTML +=  "</ul>"
//     }

//     return metalOptionsHTML
// }