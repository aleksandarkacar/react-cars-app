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
    if (newCar.isAutomatic) {
      newCar.IsAutomatic = true;
    } else {
      newCar.isAutomatic = false;
    }

    return await this.axios.post("/cars", newCar);
  };

  edit = async (editedCar, id) => {
    if (editedCar.isAutomatic) {
      editedCar.IsAutomatic = true;
    } else {
      editedCar.isAutomatic = false;
    }

    editedCar.id = id;

    return await this.axios.patch(`/cars/${id}`, editedCar);
  };

  delete = async (id) => {
    return await this.axios.delete(`/cars/${id}`);
  };
}
const carsService = new CarsService();

export default carsService;
