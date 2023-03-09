import httpService from "./HttpService";
class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  getAll = async () => {
    const response = await this.axios.get("/cars");
    return response.data;
  };

  create = async (newCar) => {
    if (newCar.isAutomatic) {
      newCar.IsAutomatic = true;
    } else {
      newCar.isAutomatic = false;
    }

    return await this.axios.post("/cars", newCar);
  };
}
const carsService = new CarsService();

export default carsService;
