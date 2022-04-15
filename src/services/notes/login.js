import Axios from "axios";

const baseUrl = "http://localhost:3001/api/login";

const login = async (credentials) => {
  const data = await Axios.post(baseUrl, credentials);
  return data;
};

export default { login };
