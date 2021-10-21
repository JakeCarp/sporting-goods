



export class ItemsService {
    addCart() {
        console.log('added to cart')
    }
    removeCart() {
        console.log('removed from cart')
    }

}

export const itemsService = new ItemsService()