import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import List from "./views/ListFilmes.view";
import Form from "./views/AddFilme.view";
import Edit from "./views/EditFilmes.view";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://www.estgv.ipv.pt/"
          style={{ color: "red", fontWeight: "bold" }}
        >
          www.estgv.ipv.pt
        </a>
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              {" "}
              Lista de Filmes{" "}
            </Link>
          </li>
        </ul>
        <Link className="btn btn-success ms-lg-auto" to="/form">
          Adicionar Filme
        </Link>
      </nav>
      <div className="container py-4">
        <div className="row">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/form" element={<Form />} />
            <Route exact path="/edit/:idFilme" element={<Edit />} />
            <Route exact path="/delete/:idFilme" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
