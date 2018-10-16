const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
    this.modelInstance = this.model('tag');
  }

  async indexAction() {

  }

  async addAction() {
    const { name } = this.post();
    try {
      let tag_info = await this.modelInstance.getTag({ name });
      if (tag_info) {
        return this.fail({
          errno: 998,
          errmsg: '该标签已经存在'
        })
      }
      const user = await this.session('user_info')
      const result = await this.modelInstance.addTag({ name, user_id: user.id })
      return this.success({ result })
    } catch (e) {
      return this.fail(e);
    }

  }

  async listAction() {
    try {
      let tag_list = await this.modelInstance.getList()
      return this.success({ tag_list })
    } catch (e) {
      return this.fail(e)
    }
  }

  async deleteAction() {
    const id = this.get('id')
    try {
      let tag = await this.modelInstance.deleteTag({ id })
      return this.success({ tag })
    } catch (e) {
      return this.fail(e)
    }
  }





};