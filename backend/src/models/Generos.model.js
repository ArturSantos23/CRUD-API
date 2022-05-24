var Sequelize = require("sequelize");
var sequelize = require("../config/db.config");

const Genero = sequelize.define(
  "genero",
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
