import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Item').Item[]} */
  items = [
    new Item({ title: 'Tennis Racket', price: 1200, desc: 'it\'s got a lotta strings', imgUrl: 'https://images.vexels.com/media/users/3/157072/isolated/preview/053589235959215fcdb18f21216d12ad-tennis-racket-icon-tennis-elements-by-vexels.png' }),
    new Item({ title: 'Baseball Bat', price: 5, desc: 'hit da ball real hard with this one', imgUrl: 'https://th.bing.com/th/id/R.68eae010d70b9565962fdcebc1d69cbc?rik=qHeFNZthvIQw3Q&ri[…]z0hNV4AS2c39SeSo1zNzjKTEnc4rTnvOTaR%2b8%3d&risl=&pid=ImgRaw&r=0' }),
    new Item({ title: 'Basketball', price: 140, desc: 'this boi has the big bounce', imgUrl: 'https://th.bing.com/th/id/R.b56230b9babca59daf1ca9ae56994747?rik=dIhzjhzIHbCggA&ri[…]RN55qeEJ0KCUMSQfg4HYyk1lc2FbdEIw4S%2f6Y%3d&risl=&pid=ImgRaw&r=0' }),
    new Item({ title: 'Jockstrap', price: 275, desc: 'everybody needs one of deez', imgUrl: 'https://26b5c92bej542nbc9b3nbw5o-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/0e6a1b50-81aa-41a6-9ad8-ae80683af04c.png' }),
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
