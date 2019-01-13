import { configure, observable, action, computed } from 'mobx'
configure({ enforceActions: 'observed' })
import axios from '~/axios'
import history from '~/history'
import { message } from 'antd'
class Login {
  @observable token = localStorage.getItem('token')
  @computed get isAuth() {
    return !!this.token
  }

  @action
  async login(data) {
    const result = await axios.post('/user/login', data)
    if (result) {
      localStorage.setItem('token', result.data.token)
      message.success('登录成功！')
      history.push('/app/dashboard')
    }
  }

  @action
  async signup(data) {
    const result = await axios.post('/user/signup', data)
    if (result) {
      localStorage.setItem('token', result.data.token)
      history.push('/app/dashboard')
      message.success('注册成功！')
    }

  }

}

export default new Login()