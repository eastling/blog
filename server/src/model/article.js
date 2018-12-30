module.exports = class extends think.Model {

  get relation() {
    return {
      category: {
        type: think.Model.BELONG_TO,
      }
    };
  }

  async addArticle({ title, content, user_id, category_id, url_name, is_open, is_comment }) {
    const result = await this.add({ title, content, user_id, category_id, url_name, is_open, is_comment })
    
    return result
  }

  async getList(type) {
    const list = await this.select();
    let result = list;
    if (type) {
      result = list.filter(item => {
        if (item.category) {
          return item.category.name === type
        }
      })
    }
    return result
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
