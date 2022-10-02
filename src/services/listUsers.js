import http from "../api/http-common";

const getAll = () => {
  return http.get("/users");
};

const get = (id) => {
  return http.get(`/users/${id}`);
};

const create = async(data) => {
  console.log(data)
  return await http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = async(id) => {
  return await http.delete(`/users/${id}`);
};


const ListUsers = {
  getAll,
  get,
  create,
  update,
  remove
};

export default ListUsers;