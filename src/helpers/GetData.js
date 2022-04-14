import React, { useState, useEffect } from "react";

const GetData = () => {
  const url = "http://localhost:3001/api/notes";
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1>FETCH API</h1>
      <ul>
        {!todos
          ? "Cargando..."
          : todos.map((todo) => (
              <li key={todo.id}>
                {todo.content} {todo.important ? "Done" : "Pending"}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default GetData;
