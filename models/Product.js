import { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {}, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Product;
