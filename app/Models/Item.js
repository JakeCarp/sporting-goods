import { generateId } from "../Utils/generateId.js"



export class Item {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title
        this.price = data.price
        this.desc = data.desc
        this.qtyInCart = 0
    }
    get Template() {
        return `
        <div class="card text-start col-2">
    <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">${this.desc}</p>
        <h5>$${this.price} - ${this.qtyInCart} in cart</h5>
        <button onclick="app.itemsController.addCart('${this.id}')">+</button>
    </div>
</div>
        `
    }
}

