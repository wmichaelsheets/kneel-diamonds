import { MetalOptions } from './MetalOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { SaveSubmission } from './OrderButton.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await SaveSubmission()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                 <div class="metal-options">${metalOptionsHTML}</div> 
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                <div class="size-options">${sizeOptionsHTML}</div> 
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                <div class="style-options">${styleOptionsHTML}</div> 
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `

    container.innerHTML = composedHTML
}

render()