


export class Item {
    constructor(data) {
        this.title = data.title
        this.price = data.price
        this.desc = data.desc
    }
    get Template {
        return `
        <div class="col-4">
        <h4> ${this.title}</h4>
        <p class="m-0">${this.desc}</p>
        <p class="m-0">$${this.price}</p>
        </div>        
        `
    }
}