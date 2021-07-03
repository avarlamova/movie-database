import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
import FilmComponent from "./FilmComponent";
import "./App.css";
import { IFilm } from "./IFilm";

function App() {
  const URL = "http://www.omdbapi.com/?apikey=";
  const API_KEY = "cc5fc055";

  const [filmChosen, setFilmChosen] = useState<IFilm[]>([]);
  const [searchedFilm, setSearchedFilm] = useState("titanic");
  //const [filmsFound, setFilmsFound] = useState([]);

  const getFilm = async (query: String): Promise<IFilm[]> => {
    console.log(query);
    console.log(typeof query);
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
    console.log(e.target);
    const input = formContent.querySelector("#inputField") as HTMLInputElement;
    console.log(input);
    setSearchedFilm(input.value);
    input.value = "";
  };

  useEffect(() => {
    try {
      (async () => {
        const query = encodeURIComponent(searchedFilm);
        const result = await getFilm(query);
        setFilmChosen(result);
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
        <input
          id="inputField"
          placeholder="type film"
          type="text"
          onSubmit={(e) => {
            searchFilm(e);
          }}
        ></input>
        <button> Search </button>
        {searchedFilm ? (
          <>
          {// компонент или интерфейс не получает данные о фильме; неправильно деструктурируется объект//
}
            <p>Results for {searchedFilm}...</p>
            <div className="films-container">
              {filmChosen
                ? (
                    <FilmComponent key={filmChosen.IMDB} film={filmChosen}></FilmComponent>
                  ))
                : ""}
            </div>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

/*
//API KEY: cc5fc055
//http://www.omdbapi.com/?apikey=cc5fc055&

import React, {useState} from 'react';

export default function App() {


    type title = string;
    type id = number;
    
    interface FilmInterface {
      Title: title,
      imdbID: id, 
    }
    let filmname='';
    async function getName() {
        let result = await fetch('http://www.omdbapi.com/?apikey=cc5fc055&t=titanic')
        .then(response=> {
          if (response.ok===true)
          return response.json()
          else throw new Error ('Error')
        })
        .then(data=> {
          const film = data as FilmInterface;
    
          filmname = film.Title;
          console.log(filmname);
          const id = film.imdbID;
          console.log(id);
    
        })
        return result;
    }
  return (
    <div className="app">
    </div>
  )
}

*/

export default App;
