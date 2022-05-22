var Sequelize = require("sequelize");
var sequelize = require("../config/db.config");
var Genero = require("./Generos.model");

var Filmes = sequelize.define(
  "Filmes",
  {
    idFilme: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DescricaoFilme: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genero: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Genero,
        key: "idGenero",
      },
    },
  },
  {
    timestamps: false,
  }
);

Filmes.belongsTo(Genero);

module.exports = Filmes;
