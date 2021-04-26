//API KEY: cc5fc055
//http://www.omdbapi.com/?apikey=cc5fc055&

type ID = number; 
type Genre = string;

interface FilmInterface {
    name: string,
    id: ID
  }
  
  let film: FilmInterface | null = null;
  let year: number = 2020;
  let yearStringified: string = (year as unknown) as string;
  
  let filmname: string = 'Tenet';

  let errormsg: string | null = null; 
  let testname = async function getName() {
    let result = await fetch('http://www.omdbapi.com/?apikey=cc5fc055&t=titanic')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.Title;
    })
    return result;
}

const app = document.getElementById("app");
const p = document.createElement("div");
p.textContent = filmname;
app?.appendChild(p);
