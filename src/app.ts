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

const element = document.querySelector('#id') as HTMLHeadingElement;
element.innerText = 'Hello world';

export default element;