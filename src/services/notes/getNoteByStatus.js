import Axios from "axios";

export const getNoteByStatus = (status) => {
  return Axios.get("http://localhost:3001/api/notes?status=" + status).then(
    (response) => {
      console.log(response.data);
    }
  );
};
