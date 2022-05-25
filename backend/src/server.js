const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const FilmesRoutes = require("./routes/Filmes.routes");

// verificacao e autenticacao da conexao a base de dados
const db = require("./config/db.config");
db.authenticate()
  .then(() => {
    console.log("Base de dados conectada...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// Porta definida para o frontend (cors)
var corsOptions = {
  origin: "http://localhost:8081",
};

// definicoes de cors para informar a um navegador
// que permite que o aplicativo Web seja executado em um determinado domínio ("http://localhost:8081")
// com permissão para acessar recursos selecionados de um servidor em uma origem distinta ("http://localhost:8080")
app.use(cors(corsOptions));

// parse requests of content-type - application/json (usado para req.body)
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded (usado para req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// rotas
app.use("/filmes", FilmesRoutes);

// definir porta, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server iniciado na porta ${PORT}.`);
});
