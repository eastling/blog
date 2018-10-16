module.exports = class extends think.Model {
  async addArticle({ title, content, user_id, category_id, url_name, is_open, is_comment }) {
    const result = await this.add({ title, content, user_id, category_id, url_name, is_open, is_comment })
    return result
  }

  async getList() {
    const list = await this.select()
    return list
  }

  async getDetail({ id }) {
    const detail = await this.where({ id }).find()
    return detail
  }

  async deleteArticle({ id }) {
    const article = await this.where({ id }).delete()
    return article
  }


};
