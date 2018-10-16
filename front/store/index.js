import BlogStore from './blog-store'

let store = null

class Store {


  constructor() {
    this.blogStore = new BlogStore(this)
  }


}

export function initializeStore(isServer) {
  if (isServer) {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}