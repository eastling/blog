module.exports = class extends think.Model {


  async addCategory({ name, user_id }) {
    const category_id = await this.add({ name, user_id })
    const category = await this.where({ id: category_id }).find()
    return { category }
  }

  async addNumber({ category_id }) {
    const category = await this.where({ id: category_id }).find();
    const number = category.artilce_number
    const result = await this.where({ id: category_id }).update({ artilce_number: number + 1 })
    return result
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
