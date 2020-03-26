import http from "../http-common";

class NewsDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/create", data);
  }

  update(id, data) {
    return http.put(`/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${id}`);
  }

  deleteAll() {
    return http.delete(`/`);
  }

  findAllNewsInTopic(topic) {
    return http.get(`/topic/${topic}`);
  }

  findAllNewsInSource(source) {
    return http.get(`/source/${source}`);
  }
}

export default new NewsDataService();