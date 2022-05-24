import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import List from "./components/ListFilmes.component";
import Form from "./components/AddFilme.component";
import Edit from "./components/EditFilmes.component";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://www.estgv.ipv.pt/"
          style={{ color: "red", fontWeight: "bold" }}
        >
          www.estgv.ipv.pt
        </a>
        <button
          className="navbar-toggler"
          type="button"
          datatoggle="collapse"
          data-target="#navbarSupportedContent"
          ariacontrols="navbarSupportedContent"
          aria-expanded="false"
          arialabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                {" "}
                Lista de Filmes{" "}
              </Link>
            </li>
          </ul>
          <Link className="btn btn-success ms-auto" to="/form">
            Adicionar Filme
          </Link>
        </div>
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
