var Sequelize = require("sequelize");

const database = new Sequelize(
  "ai2", //database name
  "postgres", //username
  "admin", //database password
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = database;
