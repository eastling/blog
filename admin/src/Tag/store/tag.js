import { configure, observable, action, computed, toJS } from 'mobx'
configure({ enforceActions: 'observed' })
import axios from '~/axios'
import history from '~/history'
import { message } from 'antd'


class Tag {
  @observable showAddModal = false
  @action setShowAddModal = bool => this.showAddModal = bool

  @action
  async addData(data) {
    const result = await axios.post('/tag/add', data)
    if (result) {
      message.success('添加标签成功')
      this.setShowAddModal(false)
      this.getList()
    }
  }

  @observable list = []
  @action setList = list => this.list = list

  @action
  async getList() {
    const result = await axios.get('/tag/list')
    if (result) {
      this.setList(result.data.tag_list)
    }
  }

  @action
  async deleteTag(id) {
    const result = await axios.delete(`/tag/delete/${id}`)
    if (result) {
      message.success('删除标签成功')
      this.getList()
    }
  }

}

export default Tag