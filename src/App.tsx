import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
import "./App.css";
//import { IFilm } from "./IFilm";

function App() {
  const URL = "http://www.omdbapi.com/?apikey=";
  const API_KEY = "cc5fc055";

  const [filmsFound, setFilmsFound] = useState([]);
  const [filmSearch, setFilmsSearch] = useState("");

  const searchForFilms = async (query: string): Promise<any> => {
    //const result = await fetch(`${URL}${API_KEY}&t=${query}`);
    const result = await fetch(
      "http://www.omdbapi.com/?apikey=cc5fc055&t=titanic"
    );
    return await result.json();
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(filmSearch);
      if (query) {
        const response = await searchForFilms(query);
        setFilmsFound(response);
      }
    })();
  }, [filmSearch]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("#inputField") as HTMLInputElement;
    setFilmsSearch(input.value);
  };
  return (
    <div className="App">
      <h3> Search for movies </h3>
      <form onSubmit={(event) => search(event)}>
        <input id="inputField" placeholder="type film" type="text"></input>
        <button> Search </button>
      </form>
    </div>
  );
}

export default App;
