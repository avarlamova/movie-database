import React, {useState, useEffect} from 'react';
import { FormEvent } from 'react';
import FilmComponent from './FilmComponent';
import './App.css';
import { IFilm } from './IFilm';

function App() {

  const URL = 'http://www.omdbapi.com/?apikey=';
  const API_KEY = 'cc5fc055';

  const [filmChosen, setFilmChosen] = useState<IFilm[]>([]);
  const [searchedFilm, setSearchedFilm] = useState('');

  const getFilm = async (query: string) : Promise<IFilm[]> => {
    return await fetch(`${URL}${API_KEY}&t=${searchedFilm}`)
    .then(response=> {
      if (response.ok===true)
      return response.json()
      else throw new Error ('Error')
    })
    .then (res => {
      return res.results
    })   
  };

  const searchFilm = (e: FormEvent) => {
    e.preventDefault(); //to stop the page from submitting and reloading
    const formContent = e.target as HTMLFormElement;
    const input = formContent.querySelector('#inputField') as HTMLInputElement;
    setSearchedFilm(input.value);
    input.value = '';
  }


  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(searchedFilm);
      if (query) {
      const result = await getFilm(query);
      console.log(result);
      setFilmChosen(result);
      }
    })();
  }, [searchedFilm]);

  return (
    <div className="App">
      <h3> Search for movies </h3>
      <form> 
        <input id="inputField" type="text" onSubmit={e=> {searchFilm(e)}}></input>
        <button> Search </button>
        {searchedFilm && <p>Results for {searchedFilm}...</p>}
      <div className="films-container">
        {filmChosen.length &&
          filmChosen.map(film =>
            (<FilmComponent key={film.IMDB}></FilmComponent>))
        }
        </div>
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
