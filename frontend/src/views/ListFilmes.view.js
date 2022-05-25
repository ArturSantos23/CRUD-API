import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style.css";

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
          <th scope="col" className="text-center">
            #
          </th>
          <th scope="col" className="text-center">
            Titulo
          </th>
          <th scope="col" className="text-center">
            DescricaoFilme
          </th>
          <th scope="col" className="text-center">
            Foto
          </th>
          <th scope="col" className="text-center">
            Genero
          </th>
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
          <th className="text-center align-middle">{data.idFilme}</th>
          <td className="text-center align-middle">{data.titulo}</td>
          <td className="text-center align-middle">{data.DescricaoFilme}</td>
          <td className="img-filme text-center align-middle">
            <div>
              <img
                src={data.foto}
                alt=""
                className="w-75 d-inline-block rounded-4 img-thumbnail"
              ></img>
            </div>
          </td>
          <td className="text-center align-middle">
            {data.genero.DescricaoGenero}
          </td>
          <td className="text-center align-middle">
            <Link className="btn btn-outline-info" to={`/edit/${data.idFilme}`}>
              Edit
            </Link>
          </td>
          <td className="text-center align-middle">
            <button
              className="btn btn-outline-danger"
              onClick={() => OnDelete(data.idFilme)}
            >
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }
  function OnDelete(id) {
    Swal.fire({
      title: "Tem a certeza?",
      text: "Não será possível recuperar este filme!",
      showCancelButton: true,
      confirmButtonText: "Sim, apagar!",
      cancelButtonText: "Não, voltar atrás",
    }).then((result) => {
      if (result.value) {
        SendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "O filme não foi eliminado", "error");
      }
    });
  }
  function SendDelete(idFilme) {
    FilmesDataService.delete(idFilme)
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Apagado!", "O filme foi apagado com sucesso.", "success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
