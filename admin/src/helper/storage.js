// const storage = {
//   getItem(key) {
//     return localStorage.getItem(key)
//   },
//   setItem(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   },

//   appendItem(key, object) {
//     storage.setItem(key, Object.assign(storage.getItem(key), object));
//   },
//   remove(key) {
//     localStorage.removeItem(key);
//   }
// };

// export default storage;


class Storage {
  getItem(key) {
    return localStorage.getItem(key)
  }
  setItem(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  appendItem(key, object) {
    storage.setItem(key, Object.assign(storage.getItem(key), object));
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}

export default new Storage()