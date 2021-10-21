import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";

function _draw() {
    let items = ProxyState.items
    let template = ``
    items.forEach(i => template += i.Template)
    document.getElementById('app').innerHTML = template
}
function _drawCart() {
    let template = ``
    let cart = ProxyState.cart
    cart.forEach(c => {
        template += `
        <div>
        <p class="m-0">${c.title} - ${c.price}</p>
        <button class="btn btn-warn mdi mdi-trash"></button>
        </div>
        `
    })
    document.getElementById('cart').innerHTML = template
}



export class itemsController {
    constructor() {
        _draw()
    }

    addCart() {
        itemsService.addCart()
    }

    removeCart() {
        itemsService.removeCart()
    }

    showCart() {
        _drawCart()
    }

}
