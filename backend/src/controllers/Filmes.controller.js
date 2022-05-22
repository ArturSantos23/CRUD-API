//import sequelize
var sequelize = require("../config/db.config");
// import model
var Filmes = require("../models/Filmes.model");
var Generos = require("../models/Generos.model");

const controller = {};
const { Op } = require("sequelize");
sequelize.sync();

controller.CreateGeneroTESTDATA = async (req, res) => {
  // Criar um Genero teste
  const genero = {
    DescricaoGenero: "Ação",
  };
  // Guardar Genero na base de dados
  Generos.create(genero)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro na criacao de 'Generos'.",
      });
    });
};

controller.CreateFilmeTESTDATA = async (req, res) => {
  // Criar um Filme teste
  const filme = {
    DescricaoFilme: "Um filme com ação incrível!",
    titulo: "Die Hard",
    foto: "Die_Hard.jpg",
    genero: 4,
  };
  // Guardar Filme na base de dados
  Filmes.create(filme)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro na criacao de 'Filmes'.",
      });
    });
};

controller.genero = async (req, res) => {
  // Criar um Genero
  const genero = {
    DescricaoGenero: req.body.DescricaoGenero,
  };
  // Guardar Genero na base de dados
  Generos.create(genero)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro na criacao de 'Generos'.",
      });
    });
};

controller.create = async (req, res) => {
  // Validar request
  if (!req.body.titulo) {
    res.status(400).send({
      message: "Insira um titulo!",
    });
    return;
  }
  // Criar um Filme
  const filme = {
    DescricaoFilme: req.body.DescricaoFilme,
    titulo: req.body.titulo,
    foto: req.body.foto,
    genero: req.body.genero,
  };
  // Guardar Filme na base de dados
  Filmes.create(filme)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro na criacao de 'Filmes'.",
      });
    });
};

controller.list = async (req, res) => {
  Filmes.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving 'Filmes'.",
      });
    });
};

controller.get = async (req, res) => {
  const id = req.params.id;

  // Validar request
  if (id == ":id") {
    res.status(400).send({
      message: "Insira um id!",
    });
    return;
  }

  Filmes.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Nao foi possivel encontrar o Filme com o id=" + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao procurar o Filme com o id=" + id,
      });
    });
};

controller.update = async (req, res) => {
  const id = req.params.id;

  await Filmes.update(req.body, {
    where: { idFilme: id },
  })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "O Filme com o id=" + id + " foi atualizado com sucesso!.",
          data: data,
        });
      } else {
        res.send({
          message:
            "Não foi possivel atualizar o Filme com o id=" +
            id +
            ". Talvez 'Filmes' não foi encontrado ou req.body is empty!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Nao foi possivel atualizar o Filme com o id=" + id,
      });
    });
};

controller.delete = async (req, res) => {
  const id = req.params.id;

  Filmes.destroy({
    where: { idFilme: id },
  })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "O Filme com o id=" + id + " foi eliminado com sucesso!",
        });
      } else {
        res.send({
          message:
            "Não foi possivel eliminar o Filme com o id=" +
            id +
            ". Talvez 'Filmes' não foi encontrado ou id=" +
            id +
            " não existe!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Nao foi possivel eliminar o Filme com o id=" + id,
      });
    });
};

controller.deleteAll = async (req, res) => {
  Filmes.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: nums + "Filmes were deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro na eliminacao de todos os Filmes.",
      });
    });
};

controller.deleteGenero = async (req, res) => {
  const id = req.params.id;

  // Validar request
  if (id == ":id") {
    res.status(400).send({
      message: "Insira um id!",
    });
    return;
  }

  Generos.destroy({
    where: { idGenero: id },
  })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "O Genero com o id=" + id + " foi eliminado com sucesso!",
        });
      } else {
        res.send({
          message:
            "Não foi possivel eliminar o Genero com o id=" +
            id +
            ". Talvez 'Generos' não foi encontrado ou id=" +
            id +
            " não existe!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Nao foi possivel eliminar o Genero com o id=" + id,
      });
    });
};

module.exports = controller;
