module.exports = class extends think.Model {


  async addCategory({ name, user_id }) {
    const category_id = await this.add({ name, user_id })
    const category = await this.where({ id: category_id }).find()
    return { category }
  }

  async getCategory(data) {
    const category = await this.where(data).find();
    if (think.isEmpty(category)) {
      return false;
    }
    return category
  }

  async getList() {
    const list = await this.select()
    return list
  }

  async deleteCategory({ id }) {
    const category = await this.where({ id }).delete()
    return category
  }

};
