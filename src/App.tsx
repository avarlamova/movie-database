import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
import "./App.css";
import { IFilm } from "./IFilm";
import FilmComponent from "./FilmComponent";

function App() {
  const URL = "http://www.omdbapi.com/?apikey=";
  const API_KEY = "cc5fc055";

  const [filmsFound, setFilmsFound] = useState<IFilm>({
    Title: "",
    Year: 0,
    IMDB: 0,
    Poster: "",
    Plot: "",
  });
  const [filmSearch, setFilmsSearch] = useState("");

  const searchForFilms = async (query: string): Promise<IFilm> => {
    const result = await fetch(`${URL}${API_KEY}&t=${query}`);
    return await result.json();
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(filmSearch);
      if (query) {
        const response = await searchForFilms(query);
        console.log(response);
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
      {filmSearch && <p> Results for {filmSearch}...</p>}

      <div className="filmContainter">
        {/* {filmsFound.length &&
          filmsFound.map((film) => (  */}
        <FilmComponent key={filmsFound.IMDB} film={filmsFound}></FilmComponent>
      </div>
    </div>
  );
}

export default App;
