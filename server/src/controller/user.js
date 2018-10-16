const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
    this.modelInstance = this.model('user');
  }

  async indexAction() {

  }

  async loginAction() {
    const { name, password } = this.post();

    try {
      let user_info = await this.modelInstance.getUser({ name, password });
      if (user_info) {
        delete user_info.password
        const token = await this.session('user_info', user_info)
        return this.success({ token })
      } else {
        return this.fail({
          errno: 401,
          errmsg: '账号或者密码错误',
        })
      }
    } catch (e) {
      return this.fail(e);
    }

  }

  async signupAction() {
    const { name, password } = this.post();

    try {
      let user_info = await this.modelInstance.getUser({ name, password });
      if (user_info) {
        return this.fail({
          errno: 1000,
          errmsg: '用户已注册，请直接登录'
        })
      }
      const result = await this.modelInstance.addUser({ name, password })
      const token = await this.session('user_info', result.user)
      return this.success({ token })
    } catch (e) {
      return this.fail(e);
    }

  }

  async logoutAction() {
    await this.session(null)
    this.success()
  }

  async infoAction() {
    const user_info = await this.session('user_info');
    if (think.isEmpty(user_info)) {
      return this.fail({
        errno: 401,
        errmsg: '登录后操作'
      });
    }
    delete user_info.password
    console.log(1133, user_info)
    this.success(user_info);

  }

};