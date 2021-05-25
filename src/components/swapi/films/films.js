import React from "react";
import {useSelector} from "react-redux";
import {FilmCard} from "./filmCard";

export const Films = () => {
    const films = useSelector(state => state.films.all)

    return(
        <React.Fragment>
            {films.map(film => (
                <FilmCard
                    title={film.title}
                    characters={film.characters}
                    director={film.director}
                    episode_id={film.episode_id}
                    opening_crawl={film.opening_crawl}
                    planets={film.planets}
                    producer={film.producer}
                    release_date={film.release_date}
                    species={film.species}
                    starships={film.starships}
                    vehicles={film.vehicles}
                />
            ))}
        </React.Fragment>
    )
}

