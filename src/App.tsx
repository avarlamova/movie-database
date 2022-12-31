import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
import "./App.css";
import { IFilm } from "./IFilm";
import FilmComponent from "./FilmComponent";
import ErrorComponent from "./ErrorComponent";
import PropagateLoader from "react-spinners/PropagateLoader";

const App = () => {
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
  const [searchError, setSearchError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchForFilms = async (query: string): Promise<IFilm> => {
    const result = await fetch(`${URL}${API_KEY}&t=${query}`);
    return await result.json();
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(filmSearch);
      if (query) {
        setSearchError(false);
        const response = await searchForFilms(query);
        setLoading(false);
        if (response.Error) {
          setSearchError(true);
        } else {
          setFilmsFound(response);
        }
      }
    })();
  }, [filmSearch]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("#inputField") as HTMLInputElement;
    setFilmsSearch(input.value);
    setLoading(true);
  };
  return (
    <div className="App">
      <h3> Search for movies </h3>
      <form onSubmit={(event) => search(event)}>
        <input
          id="inputField"
          className="inputField"
          placeholder="type film"
          type="text"
        ></input>
        <input type="image" src="/" alt="Submit" />
        {/* <button> Search </button> */}
      </form>
      {filmSearch && <p> Results for {filmSearch}...</p>}
      <div className="filmContainter">
        {searchError ? (
          <ErrorComponent />
        ) : loading ? (
          <PropagateLoader
            color={"#32a868"}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <FilmComponent key={filmsFound.IMDB} film={filmsFound} />
        )}
      </div>
    </div>
  );
};

export default App;
