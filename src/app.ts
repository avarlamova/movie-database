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

const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("div");
// 3. Add the text content
p.textContent = filmname;
app?.appendChild(p);

