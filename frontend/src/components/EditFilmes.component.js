import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import FilmesDataService from "../services/Filmes.service";

export default function EditComponent() {
  // const [dataFilmes, setdataFilmes] = useState([]);
  const [titulo, settitulo] = useState("");
  const [DescricaoFilme, setDescricaoFilme] = useState("");
  const [foto, setfoto] = useState("");
  const [generoID, setgenero] = useState("");
  const [generoDescricao, setgeneroDescricao] = useState("");

  let { idFilme } = useParams();

  useEffect(() => {
    console.log("idFilme = " + idFilme);
    FilmesDataService.get(idFilme)
      .then((response) => {
        if (response.data.success) {
          const data = response.data.data;
          console.log(data);
          // setdataFilmes(data);
          settitulo(data.titulo);
          setDescricaoFilme(data.titulo);
          setfoto(data.foto);
          setgenero(data.genero);
          setgeneroDescricao(data.genero.DescricaoGenero);
        } else {
          console.log(response.message);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // ignorar o warning 'react hook useeffect has a missing dependency'
  return (
    <div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Titulo </label>
          <input
            type="text"
            className="form-control"
            placeholder="Titulo"
            value={titulo}
            onChange={(value) => settitulo(value.target.value)}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <label htmlFor="inputEmail4">Descrição</label>
          <input
            type="text"
            className="form-control"
            placeholder="Descrição"
            value={DescricaoFilme}
            onChange={(value) => setDescricaoFilme(value.target.value)}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <label htmlFor="inputEmail4">Foto</label>
          <input
            type="text"
            className="form-control"
            placeholder="foto.png"
            value={foto}
            onChange={(value) => setfoto(value.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 mt-2">
          <label htmlFor="inputState">Género</label>
          <select
            id="inputState"
            className="form-control"
            onChange={(value) => setgenero(value.target.value)}
          >
            <option value={generoID}>{generoDescricao}</option>
            <option value="1">Ação</option>
            <option value="2">Aventura</option>
            <option value="3">Drama</option>
            <option value="4">Comédia</option>
            <option value="5">Terror</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-4"
        onClick={() => SendUpdate()}
      >
        Update
      </button>
    </div>
  );
  function SendUpdate() {
    const datapost = {
      titulo: titulo,
      DescricaoFilme: DescricaoFilme,
      foto: foto,
      genero: generoID,
    };
    FilmesDataService.update(idFilme, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
          console.log(datapost);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
