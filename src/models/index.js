const dbConfig = require("../config/db.config.js");

var pg = require("pg");
pg.defaults.ssl = true;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    schema: dbConfig.schema,
    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.households = require("./household.model.js")(sequelize, Sequelize);
db.transactions = require("./transaction.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.households.hasMany(db.transactions, {
  foreignKey: "hshd_num",
});

db.transactions.belongsTo(db.households, {
  foreignKey: "hshd_num",
  targetKey: "hshd_num"
})

db.products.hasMany(db.transactions, {
  foreignKey: "product_num",
});

db.transactions.belongsTo(db.products, {
  foreignKey: "product_num",
  targetKey: "product_num"
})

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;