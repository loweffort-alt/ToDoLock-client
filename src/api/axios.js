import axios from "axios";
import { baseURL } from "./baseURL";

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default instance;
