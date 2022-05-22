var Sequelize = require("sequelize");
var sequelize = require("../config/db.config");

const Genero = sequelize.define(
  "Generos",
  {
    idGenero: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DescricaoGenero: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Genero;
