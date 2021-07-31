import { IFilm } from "./IFilm";

const FilmComponent = (props: { film: IFilm }) => {
  const { film } = props;
  return (
    <div className="filmCard">
      <p>{film.Title}</p>
      <img
        alt="Film poster"
        src={
          film.Poster ||
          "https://lh3.googleusercontent.com/proxy/Mf9H792uCu9jRy_FeeVtcqP9WmjspmsQW8b55Qee_DhBzJtv4vJ_lsCbAsr16lY93Iqbnmu7stKJPTLxr6Y9LD7byjSTMrUmnn_DllJDK_0hlLfiRh0GqRJiNoLvwfkhuqYqW5awB8A8TIBpkHA9o0-FtEhnA0a4vw4HcZIdHezBhHrWSA"
        }
      ></img>
      <p>{film.Plot}</p>
    </div>
  );
};

export default FilmComponent;
