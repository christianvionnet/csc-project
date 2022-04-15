import Axios from "axios";

const baseUrl = "http://localhost:3001/api/login";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = Axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

export default setToken;
