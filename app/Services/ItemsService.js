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
    }

}

export const itemsService = new ItemsService()