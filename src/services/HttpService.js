import axios from "axios";

class HttpService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000/api",
    });
  }
}

const httpService = new HttpService();

export default httpService;
