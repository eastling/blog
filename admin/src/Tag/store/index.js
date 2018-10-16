import { configure } from 'mobx'
import TagStore from './tag'

configure({ enforceActions: 'observed' })

class RootStore {
  constructor() {
    this.tagStore = new TagStore(this)
  }

}

export default new RootStore()
