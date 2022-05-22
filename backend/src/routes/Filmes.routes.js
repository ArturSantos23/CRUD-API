const express = require("express");
const router = express.Router();

//importar os controladores [2]
const Filmes = require("../controllers/Filmes.controller");


//Teste Create Genero
router.post("/testdata/genero", Filmes.CreateGeneroTESTDATA);
//Teste Create Filme
router.post("/testdata/filme", Filmes.CreateFilmeTESTDATA);

// Create filme
router.post("/create", Filmes.create);

// Create genero
router.post("/create/genero", Filmes.genero);

// Procurar todos os Filmes
router.get("/list", Filmes.list);

// Procurar um Filme por ID
router.get("/get/:id", Filmes.get);

// Update de um filme por ID
router.put("/update/:id", Filmes.update);

// Delete de um filme por ID
router.delete("/delete/:id", Filmes.delete);

// Delete de um genero por ID
router.delete("/delete/genero/:id", Filmes.deleteGenero);

// Delete todos os filmes (criar nova lista)
// router.delete("/", Filmes.deleteAll);

module.exports = router;
