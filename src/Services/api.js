import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const removeToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
export async function addContact(item) {
  const { data } = await axios.post(`/contacts`, item);
  return data;
}
export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
export async function registration(body) {
  const { data } = await axios.post(`/users/signup`, body);
  setToken(data.token);
  return data;
}
export async function login(body) {
  const { data } = await axios.post(`/users/login`, body);
  setToken(data.token);
  localStorage.setItem("token", data.token);
  return data;
}
export async function currentUser() {
  const { data } = await axios.get(`/users/current`);
  return data;
}
export async function logout() {
  const { data } = await axios.post(`/users/logout`);
  return data;
}
