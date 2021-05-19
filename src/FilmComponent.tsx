import React from 'react'
import { IFilm } from './IFilm'

export default function FilmComponent(props: {IMDB: IFilm} ) {
    const { IMDB } = props;
    return (
        <div className="film--card">
                <p>{IMDB.title}</p>
        </div>
    )
}
