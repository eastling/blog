import { configure, observable, action, computed } from 'mobx'
configure({ enforceActions: 'observed' })
import axios from '~/axios'
import history from '~/history'
import { message } from 'antd'

class User {
  @observable user_info = {}
  @action setUserInfo = data => this.user_info = Object.assign({}, data)

  @action
  async getUserInfo() {
    const result = await axios.get('/user/info')
    if (result) {
      this.setUserInfo(result.data)
    }
  }

  @action
  async logout() {
    const result = await axios.get('/user/logout')
    if (result) {
      localStorage.removeItem('token')
      message.success('登出成功')
      history.push('/login')
    }
  }



}

export default new User()