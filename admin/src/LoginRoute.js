import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import { Login, SignUp, ForgetPassword } from './LoginWrap'
import './Login.less'

const items = [{
  title: '登录',
  component: <Login />
}, {
  title: '注册',
  component: <SignUp />
}, {
  title: '忘记密码',
  component: <ForgetPassword />
}]

class LoginRoute extends Component {

  state = {
    showIndex: '0'
  }

  render() {
    return (
      <div className="login-route-main">
        <ul className="tab-list">
          {items.map((item, i) => {
            return (
              <li key={i} className={`tab-list-item ${i == this.state.showIndex ? 'checked' : ''}`} onClick={() => this.setState({ showIndex: i })}>
                {item.title}
              </li>
            )
          })}
        </ul>
        <ul className="main-list">
          {items.map((item, i) => {
            if (this.state.showIndex == i) {
              return (
                <li key={i} className="main-list-item">
                  {item.component}
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default LoginRoute