import { configure, observable, action, computed, toJS } from 'mobx'
configure({ enforceActions: 'observed' })
import axios from '~/axios'
import history from '~/history'
import { message } from 'antd'


class Category {
  @observable showAddModal = false
  @action setShowAddModal = bool => this.showAddModal = bool

  @action
  async addData(data) {
    const result = await axios.post('/category/add', data)
    if (result) {
      message.success('添加分类成功')
      this.setShowAddModal(false)
      this.getList()
    }
  }

  @observable list = []
  @action setList = list => this.list = list

  @action
  async getList() {
    const result = await axios.get('/category/list')
    if (result) {
      this.setList(result.data.category_list)
    }
  }

  @action
  async deleteCategory(id) {
    const result = await axios.delete(`/category/delete/${id}`)
    if (result) {
      message.success('删除分类成功')
      this.getList()
    }
  }

}

export default Category