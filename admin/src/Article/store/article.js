import { configure, observable, action } from 'mobx'
configure({ enforceActions: 'observed' })
import { message } from 'antd'
import axios from '~/axios'
import history from '~/history'

export default class ArticleStore {
  @observable category_list = []
  @action setCategoryList = list => this.category_list = list

  @observable tag_list = []
  @action setTagList = list => this.tag_list = list



  @action
  async getCategoryList() {
    const result = await axios.get('/category/list')
    if (result) {
      this.setCategoryList(result.data.category_list)
    }
  }

  @action
  async getTagList() {
    const result = await axios.get('/tag/list')
    if (result) {
      this.setTagList(result.data.tag_list)
    }
  }

  @action
  async addData(data) {
    const result = await axios.post('/article/add', data)
    if (result) {
      message.success('添加文章成功')
      history.push('/app/article')
    }
  }


  @observable list = []
  @action setList = list => this.list = list



  @action
  async getList() {
    const result = await axios.get('/article/list')
    if (result) {
      this.setList(result.data.article_list)
    }
  }

  @action
  async deleteArticle(id) {
    const result = await axios.delete(`/article/delete/${id}`)
    if (result) {
      message.success('删除文章成功')
      this.getList()
    }
  }

}

