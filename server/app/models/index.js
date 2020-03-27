const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.news = require("./modelNews")(sequelize, Sequelize);
db.topic = require("./modelTopic")(sequelize, Sequelize);
db.source = require("./modelSource")(sequelize, Sequelize);
db.topic.hasMany(db.news, { onDelete: "cascade" });
db.source.hasMany(db.news, { onDelete: "cascade" });

module.exports = db;
