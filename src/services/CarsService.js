import httpService from "./HttpService";
class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  getAll = async () => {
    const response = await this.axios.get("/cars");
    return response.data;
  };

  get = async (id) => {
    const response = await this.axios.get(`/cars/${id}`);
    return response.data;
  };

  create = async (newCar) => {
    return await this.axios.post("/cars", newCar);
  };

  edit = async (editedCar) => {
    return await this.axios.patch(`/cars/${editedCar.id}`, editedCar);
  };

  delete = async (id) => {
    return await this.axios.delete(`/cars/${id}`);
  };
}
const carsService = new CarsService();

export default carsService;
