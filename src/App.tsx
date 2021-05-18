import React, {useState, useEffect} from 'react';
import { FormEvent } from 'react';
import './App.css';

function App() {

  const URL = 'http://www.omdbapi.com/?apikey=';
  const API_KEY = 'cc5fc055';

  const [filmChosen, setFilmChosen] = useState('');
  const [searchedFilm, setSearchedFilm] = useState('Titanic');

  const getFilm = async (query: string) : Promise<any> => {
    await fetch(`${URL}${API_KEY}&t=${searchedFilm}`)
    .then(response=> {
      if (response.ok===true)
      return response.json()
      else throw new Error ('Error')
    })
    .then (res => {
      return res.results
    })   
  };

  const searchFilm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //to stop the page from submitting and reloading
    const formContent = e.target as HTMLFormElement;
    const input = formContent.querySelector('#inputField');
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
