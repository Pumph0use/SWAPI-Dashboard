import React from "react";
import {useSelector} from "react-redux";
import {StarshipCard} from "./starshipCard";

export const Starships = () => {
    const starships = useSelector(state => state.starships.all)

    return(
        <React.Fragment>
            {starships.map(starship => (
                <StarshipCard
                    name={starship.name}
                    mglt={starship.MGLT}
                    cargo_capacity={starship.cargo_capacity}
                    consumables={starship.consumables}
                    cost_in_credits={starship.cost_in_credits}
                    crew={starship.crew}
                    hyperdrive_rating={starship.hyperdrive_rating}
                    length={starship.length}
                    manufacturer={starship.manufacturer}
                    max_atmosphering_speed={starship.max_atmosphering_speed}
                    model={starship.model}
                    passengers={starship.passengers}
                    films={starship.films}
                    pilots={starship.pilots}
                    starship_class={starship.starship_class}
                />
            ))}
        </React.Fragment>
    )
}

