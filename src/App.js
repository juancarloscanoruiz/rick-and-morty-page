import React, { useState, useEffect } from "react";
import { getAllCharacters } from "./api/characters";
import "./App.scss"
function App() {

  useEffect(() => {
    const response = getAllCharacters();
    response.then((result) => {
      console.log(result);
    })
  }, [])

  return (
    <div className="col-1">
      <h1>Rick and Morty App</h1>
    </div>
  );
}

export default App;
