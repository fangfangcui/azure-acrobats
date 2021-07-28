module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
      product_num: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      department: {
        type: Sequelize.STRING,
      },
      commodity: {
        type: Sequelize.STRING,
      },
      brand_ty: {
        type: Sequelize.STRING,
      },
      natural_organic_flag: {
        type: Sequelize.STRING,
      },
    }, {
        timestamps: false
    });
  
    return Product;
  };