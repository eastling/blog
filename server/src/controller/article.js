const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
    this.modelInstance = this.model('article');
  }

  async indexAction() {

  }

  async addAction() {
    const user_info = await this.session('user_info')
    const { title, content, url_name, is_open, is_comment, category_id } = this.post();
    const data = { title, content, user_id: user_info.id, category_id, url_name, is_open, is_comment }
    try {
      const insertId = await this.modelInstance.addArticle(data)
      return this.success(insertId);
    } catch (e) {
      return this.fail(e)
    }
  }

  async listAction() {
    try {
      let article_list = await this.modelInstance.getList()
      return this.success({ article_list })
    } catch (e) {
      return this.fail(e)
    }
  }

  async detailAction() {
    const { id } = this.post()
    try {
      let article_detail = await this.modelInstance.getDetail({ id })
      return this.success({ article_detail })
    } catch (e) {
      return this.fail(e)
    }
  }

  async updateAction() {

  }

  async deleteAction() {
    const id = this.get('id')
    try {
      let article = await this.modelInstance.deleteArticle({ id })
      return this.success({ article })
    } catch (e) {
      return this.fail(e)
    }
  }


};
