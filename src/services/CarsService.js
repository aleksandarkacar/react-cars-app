import httpService from "./HttpService";
class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  getAll = () => {
    const promise = this.axios.get("/cars");
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  };
}
const carsService = new CarsService();

export default carsService;
