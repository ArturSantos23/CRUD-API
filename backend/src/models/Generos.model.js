var Sequelize = require("sequelize");
var sequelize = require("../config/db.config");

const Genero = sequelize.define(
  "Generos",
  {
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
