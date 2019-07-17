import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.punkapi.com/v2/"
});

export default axiosInstance;
