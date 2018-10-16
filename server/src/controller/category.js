const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
    this.modelInstance = this.model('category');
  }

  async indexAction() {

  }

  async addAction() {
    const { name } = this.post();
    try {
      let category_info = await this.modelInstance.getCategory({ name });
      if (category_info) {
        return this.fail({
          errno: 999,
          errmsg: '该分类已经存在'
        })
      }
      const user = await this.session('user_info')
      const result = await this.modelInstance.addCategory({ name, user_id: user.id })
      return this.success({ result })
    } catch (e) {
      return this.fail(e);
    }

  }

  async listAction() {
    try {
      let category_list = await this.modelInstance.getList()
      return this.success({ category_list })
    } catch (e) {
      return this.fail(e)
    }
  }

  async deleteAction() {
    const id = this.get('id')
    try {
      let category = await this.modelInstance.deleteCategory({ id })
      return this.success({ category })
    } catch (e) {
      return this.fail(e)
    }
  }





};