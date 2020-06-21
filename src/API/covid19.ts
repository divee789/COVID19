import axios, { AxiosInstance } from "axios";

class CovidAPI {
  public instance: AxiosInstance;
  public baseUrl = "https://corona.lmao.ninja/v2";

  constructor() {
    const axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: 50000,
      headers: {
        Accept: "application/json",
      },
    });
    this.instance = axiosInstance;
  }

  async getWorldStats() {
    const response = await axios.get("https://api.covid19api.com/world/total");
    return response.data;
  }

  async getAllCountriesStats() {
    const response = await this.instance.get("/countries");
    return response.data;
  }
}

export default CovidAPI;
