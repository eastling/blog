import { configure } from 'mobx'
import ArticleStore from './article'

configure({ enforceActions: 'observed' })

class RootStore {
  constructor() {
    this.articleStore = new ArticleStore(this)
  }

}

export default new RootStore()
