import Axios from "axios";

export const getAllNotes = () => {
  return Axios.get("http://localhost:3001/api/notes").then((response) => {
    console.log(response.data);
  });
};
