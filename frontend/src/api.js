import axios from "axios";

const API = axios.create({
  baseURL: "https://findmehere.onrender.com/api/",
  withCredentials: false,   // ADD THIS
});

export default API;