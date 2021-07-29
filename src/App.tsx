import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
//import FilmComponent from "./FilmComponent";
import "./App.css";
//import { IFilm } from "./IFilm";

function App() {
  const URL = "http://www.omdbapi.com/?apikey=";
  const API_KEY = "cc5fc055";

  //const [filmChosen, setFilmChosen] = useState<IFilm[]>([]);
  const [filmChosen, setFilmChosen] = useState("");
  const [searchedFilm, setSearchedFilm] = useState("");
  //const [filmsFound, setFilmsFound] = useState([]);

  /* const getFilm = async (query: string) => {
    return await fetch(`${URL}${API_KEY}&t=${query}`)
      //return await fetch("http://www.omdbapi.com/?apikey=cc5fc055&t=titanic")
      .then((response) => {
        if (response.ok === true) return response.json();
        else throw new Error("Error");
      })
      .then((res) => {
        setFilmChosen(res);
        console.log(filmChosen);
        return res;
      });
  };

  const searchFilm = (e: FormEvent) => {
    e.preventDefault(); //to stop the page from submitting and reloading
    const formContent = e.target as HTMLFormElement;
    const input = formContent.querySelector("#inputField") as HTMLInputElement;
    setSearchedFilm(input.value);
    input.value = "";
  };
*/
  useEffect(() => {
    try {
      (async () => {
        //const query = encodeURIComponent(searchedFilm);
        const result = await fetch(
          "http://www.omdbapi.com/?apikey=cc5fc055&t=titanic"
        );
        console.log(JSON.parse(result.toString()));
        setFilmChosen(JSON.parse(result.toString()));
      })();
    } catch (err) {
      console.log(err);
    }
  }, [searchedFilm]);

  return (
    <div className="App">
      <h3> Search for movies </h3>
      <form>
        <h1> {filmChosen} </h1>
        <input id="inputField" placeholder="type film" type="text"></input>
        <button> Search </button> {searchedFilm}
        {/* {searchedFilm ? (
          <>
            {
              // компонент или интерфейс не получает данные о фильме; неправильно деструктурируется объект//
            }
            <p>Results for {searchedFilm}...</p>
            <div className="films-container">
              {filmChosen ? (
                <FilmComponent
                //key={filmChosen.IMDB}
                //film={filmChosen}
                ></FilmComponent>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          "" */}
      </form>
    </div>
  );
}

export default App;
