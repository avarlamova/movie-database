import React from "react";
import { IFilm } from "./IFilm";

export default function FilmComponent(props: { film: IFilm }) {
  const { film } = props;
  return (
    <div className="film--card">
      <p>{film.Title}</p>
      <img
        alt="Poster not found"
        src={
          film.Src ||
          "https://lh3.googleusercontent.com/proxy/Mf9H792uCu9jRy_FeeVtcqP9WmjspmsQW8b55Qee_DhBzJtv4vJ_lsCbAsr16lY93Iqbnmu7stKJPTLxr6Y9LD7byjSTMrUmnn_DllJDK_0hlLfiRh0GqRJiNoLvwfkhuqYqW5awB8A8TIBpkHA9o0-FtEhnA0a4vw4HcZIdHezBhHrWSA"
        }
      >
        {" "}
      </img>
      <p>{film.Plot}</p>
    </div>
  );
}
