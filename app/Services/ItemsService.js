import { ProxyState } from "../AppState.js"




export class ItemsService {
    addCart(id) {
        const item = ProxyState.items.find(i => i.id == id)
        item.qtyInCart++
        ProxyState.items = ProxyState.items
    }
    removeCart(id) {
        const item = ProxyState.items.find(i => i.id == id)
        item.qtyInCart = 0
        ProxyState.items = ProxyState.items
    }
    checkout() {
        const items = ProxyState.items
        items.forEach(i => i.qtyInCart = 0)
        ProxyState.items = ProxyState.items
    }

}

export const itemsService = new ItemsService()