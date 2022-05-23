import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import FilmesDataService from "../services/Filmes.service";

export default function ListComponent() {
  const [dataFilmes, setdataFilmes] = useState([]);
  useEffect(() => {
    FilmesDataService.getAll()
      .then((response) => {
        if (response.data.success) {
          const data = response.data.data;
          console.log(data);
          setdataFilmes(data);
        } else {
          console.log("Erro ao dar load" + response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <table className="table table-hover table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">DescricaoFilme</th>
          <th scope="col">Foto</th>
          <th scope="col">Genero</th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>
  );
  function LoadFillData() {
    return dataFilmes.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idFilme}</th>
          <td>{data.titulo}</td>
          <td>{data.DescricaoFilme}</td>
          <td>{data.foto}</td>
          <td>{data.genero}</td>
          <td>
            <Link className="btn btn-outline-info " to={`/edit/${data.idFilme}`} >
              Edit
            </Link>
          </td>
          <td>
            <button className="btn btn-outline-danger">Delete </button>
          </td>
        </tr>
      );
    });
  }
}
