const fs = require('fs');
const path = require('path');

// const readPromise = think.promisify(fs.readFile, fs)

module.exports = class extends think.Model {

  async init() {
    const { data } = require('./data.js');

    for (let item of data) {
      let { content, title, author, position, scope, type, properties, subject, metaphor, character } = item;

      properties = JSON.stringify(properties)
      try {
        const id = await this.add({ content, title, author, position, scope, type, properties, subject, metaphor, character });
        console.log('add data success' + `${id}`)
      } catch (e) {
        console.log(e)
      }
    }
    return true
  }


  async getList(data) {
    let query = {}
    for (let key in data) {
      if (data[key]) {
        query[key] = data[key]
      }
    }
    for (let item in query) {
      if (item === 'content') {
        const temp = query['content']
        query['content'] = ['like', `%${temp}%`]
      }
    }

    const list = await this.where(query).select();
    return list
  }

};
