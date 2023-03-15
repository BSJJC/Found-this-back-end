import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/platformModel/getModels",
  method: "GET",
  timeout: 3000,
});

const getModels = async () => {
  return await instance.request({});
};

export default getModels;
