import { setMetal } from "./TransientState.js"

const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        setMetal()
    }
}


export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metal = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalOptionsHTML = "<ul>"
    for (const metals of metal) {
        metalOptionsHTML += `<input type='radio' name='metal' value='${metals.id}' /> ${metals.metal}`

        metalOptionsHTML +=  "</ul>"
    }

    return metalOptionsHTML
}