const Cart = require('./cart');
const db = require('../util/database');


module.exports = class Product {
  constructor(id, title, imageUrl, DESCRIPTION, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.DESCRIPTION = DESCRIPTION;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO neproductsw_table (title, price, DESCRIPTION, imageUrl) VALUES(?, ?, ?, ?)',
      [this.title, this.price, this.DESCRIPTION, this.imageUrl]
    );

  }

  static deleteById(id) {
   
  }

  static fetchAll() {
    return db.execute('SELECT * FROM neproductsw_table');
  }

  static findById(id, cb) {
   
  }
};
