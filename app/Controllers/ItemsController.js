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
    let cartTotal = 0
    let items = ProxyState.items
    items.forEach(i => {
        if (i.qtyInCart > 0) {
            cartTotal += i.price * i.qtyInCart
            template += `
            <div class="row justify-content-between">
            <p class="m-0 col-6">${i.title} - ${i.qtyInCart} - $${i.price * i.qtyInCart}</p>
            <button class="btn btn-warn col-1" onclick="app.itemsController.removeCart('${i.id}')"><i class="mdi mdi-trash-can"></i></button>
            </div>
            `
        }
    })
    document.getElementById('cart-total').innerText = cartTotal
    document.getElementById('cart').innerHTML = template
}



export class ItemsController {
    constructor() {
        ProxyState.on('items', _draw)
        ProxyState.on('items', _drawCart)
        _draw()
    }

    addCart(id) {
        itemsService.addCart(id)
    }

    removeCart(id) {
        itemsService.removeCart(id)
    }

    checkout() {
        itemsService.checkout()
    }
}
