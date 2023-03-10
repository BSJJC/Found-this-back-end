import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/administrator/login",
  method: "POST",
  timeout: 3000,
});

const administratorLogin = async (logInData: {
  email: String;
  password: String;
}) => {
  return await instance.request({
    data: logInData,
  });
};

export { administratorLogin };
