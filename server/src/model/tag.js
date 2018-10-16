module.exports = class extends think.Model {


  async addTag({ name, user_id }) {
    const tag_id = await this.add({ name, user_id })
    const tag = await this.where({ id: tag_id }).find()
    return { tag }
  }

  async getTag(data) {
    const tag = await this.where(data).find();
    if (think.isEmpty(tag)) {
      return false;
    }
    return tag
  }

  async getList() {
    const list = await this.select()
    return list
  }

  async deleteTag({ id }) {
    const tag = await this.where({ id }).delete()
    return tag
  }

};
