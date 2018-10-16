module.exports = class extends think.Model {


  async addUser({ name, password }) {
    const user_id = await this.add({ name, password })
    const user = await this.where({ id: user_id }).find()
    return { user, id: user_id }
  }

  async getUser(data) {
    const user = await this.where(data).find();
    if (think.isEmpty(user)) {
      return false;
    }
    return user
  }

};
