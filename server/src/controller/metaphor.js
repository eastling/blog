const Base = require('./base.js');
const fs = require('fs');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg)
    this.modelInstance = this.model('metaphor');
  }

  async initAction() {
    const result = await this.modelInstance.init();
    return this.success({ result })
  }

  addAction() {
    const { data } = this.post();
    this.modelInstance.add({ data })
  }

  async getListAction() {
    const { content, title, author, properties, position, scope, type, subject, metaphor, character } = this.get();
    const data = { content, title, author, properties, position, scope, type, subject, metaphor, character }

    const result = await this.modelInstance.getList(data);
    return this.success(result)
  }
};
