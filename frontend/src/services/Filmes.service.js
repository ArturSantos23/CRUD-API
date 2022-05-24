import http from "../http-common";
class FilmesDataService {
  getAll() {
    return http.get("/list");
  }
  getAllGeneros() {
    return http.get("/listgeneros");
  }
  get(id) {
    return http.get(`/get/${id}`);
  }
  create(data) {
    return http.post("/create", data);
  }
  update(id, data) {
    return http.put(`/update/${id}`, data);
  }
  delete(id) {
    return http.delete(`/delete/${id}`);
  }
//   deleteAll() {
//     return http.delete("/");
//   }
}
export default new FilmesDataService();
