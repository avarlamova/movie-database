import { IFilm } from "./IFilm";

const FilmComponent = (props: { film: IFilm }) => {
  const { film } = props;
  return (
    <div className="filmCard">
      <p>{film.Title}</p>
      {film.Poster && <img alt="Film poster" src={film.Poster}></img>}
      <p>{film.Plot}</p>
    </div>
  );
};

export default FilmComponent;
