import Axios from "axios";

export const createNote = (info) => {
  return Axios.post(url, {
    name: info.name,
    data: info.data,
  }).then((response) => {
    setSentData(response.data);
    console.log(response.data);
  });
};
