import axios from "axios";

const API = axios.create({
  baseURL: "https://findmehere.onrender.com/api/",
});

export default API;