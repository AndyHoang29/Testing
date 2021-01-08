import API from "../_backend/api";

export const userAxiosService = {
  login,
  logout,
  register,
  getAll,
  getUserById,
  update,
  deleteUser,
};

function login(username, password) {
  return API.post(`/login`, {
    username: username,
    password: password,
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  return API.post(`/register`, JSON.stringify(user));
}

function getAll() {
   return API.get('/');
}

function getUserById(id) {
  return API.get(`/${id}`, id);
}

function update(user) {
  return API.put(`/${user.userId}`, JSON.stringify(user));
}

function deleteUser(id) {
  return API.delete(`${id}`, {
    id: id,
  });
}
