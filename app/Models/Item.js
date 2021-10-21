import { generateId } from "../Utils/generateId.js"



export class Item {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title
        this.price = data.price
        this.desc = data.desc
        this.imgUrl = data.imgUrl
        this.qtyInCart = 0
    }
    get Template() {
        return `
        <div class="card text-start col-2 elevation-4">
    <div class="card-body">
        <img class="card-img-top" src="${this.imgUrl}" alt="card image">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">${this.desc}</p>
        <h5>$${this.price} - ${this.qtyInCart} in cart</h5>
        <button class="btn btn-primary" onclick="app.itemsController.addCart('${this.id}')"><i class="mdi mdi-cart-plus"></i></button>
    </div>
</div>
        `
    }
}


