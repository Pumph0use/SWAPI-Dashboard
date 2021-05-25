import React from "react";
import {useSelector} from "react-redux";
import {PlanetCard} from "./planetCard";

export const Planets = () => {
    const planets = useSelector(state => state.planets.all)

    return(
        <React.Fragment>
            {planets.map(planet => (
                <PlanetCard
                    name={planet.name}
                    climate={planet.climate}
                    diameter={planet.diameter}
                    films={planet.films}
                    gravity={planet.gravity}
                    orbital_period={planet.orbital_period}
                    population={planet.population}
                    residents={planet.residents}
                    rotation_period={planet.rotation_period}
                    surface_water={planet.surface_water}
                    terrain={planet.terrain}
                />
            ))}
        </React.Fragment>
    )
}


