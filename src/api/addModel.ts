import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/platformModel/addModel",
  method: "POST",
  timeout: 3000,
});

const addModel = async (model: { title: String; intro: String }) => {
  return await instance.request({
    data: model,
  });
};

export default addModel;
