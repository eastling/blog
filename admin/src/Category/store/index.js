import { configure } from 'mobx'
import CategoryStore from './category'

configure({ enforceActions: 'observed' })

class RootStore {
  constructor() {
    this.categoryStore = new CategoryStore(this)
  }

}

export default new RootStore()
