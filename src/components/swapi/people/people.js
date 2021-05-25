import React from "react";
import {useSelector} from "react-redux";
import {PersonCard} from "./personCard";

export const People = () => {
    const people = useSelector(state => state.people.all)

    return (
        <React.Fragment>
            {people.map(person => console.log(person))}
            {people.map(person => (
                <PersonCard
                    name={person.name}
                    birth_year={person.birth_year}
                    eye_color={person.eye_color}
                    gender={person.gender}
                    hair_color={person.hair_color}
                    height={person.height}
                    mass={person.mass}
                    skin_color={person.skin_color}
                    films={person.films}
                    species={person.species}
                    starships={person.starships}
                    vehicles={person.vehicles}
                />
            ))}
        </React.Fragment>
    )

}

