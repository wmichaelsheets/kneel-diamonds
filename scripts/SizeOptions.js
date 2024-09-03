import { setSize } from "./TransientState.js"

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        setSize(parseInt(changeEvent.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const size = await response.json()

    document.addEventListener("change", handleSizeChange)

    let sizeOptionsHTML = ""
     const divStringArray = size.map(
        (size) => {
            return `<div> 
                <input type='radio' name='size' value='${size.id}' /> ${size.carets}
            </div>`
        }
    )
        sizeOptionsHTML +=  divStringArray.join("")
    
        return sizeOptionsHTML
    }

    
    

    // let sizeOptionsHTML = "<ul>"
    // for (const sizes of size) {
    //     sizeOptionsHTML += `<input type='radio' name='size' value='${sizes.id}' /> ${sizes.carets}`

    //     sizeOptionsHTML +=  "</ul>"
    // }

    // return sizeOptionsHTML
