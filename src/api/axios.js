import axios from "axios";

const instance = axios.create({
  baseURL: "https://todolock-server.onrender.com/api",
  withCredentials: true,
});

export default instance;
