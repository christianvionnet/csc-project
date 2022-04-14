import axios from "axios";

export const createNote = (info) => {
  console.log(info);
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", { info })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
