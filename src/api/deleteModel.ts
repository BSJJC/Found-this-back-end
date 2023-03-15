import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/platformModel/deleteModel",
  method: "DELETE",
  timeout: 3000,
});

const deleteModel = async (titles: {}) => {
  return await instance.request({
    data: { title: titles },
  });
};

export default deleteModel;
