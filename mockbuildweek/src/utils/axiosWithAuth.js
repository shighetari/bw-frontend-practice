import axios from "axios";

export const axiosWithAuth = () => {
  //get token
  const token = window.localStorage.getItem("token");
  //create a new instance of axios with the config object built in
  return axios.create({
    authorization: token,
    baseURL: "http://localhost:5000",
  });
};
