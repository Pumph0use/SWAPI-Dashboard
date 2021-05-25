import React from "react";
import {useSelector} from "react-redux";
import {SpeciesCard} from "./speciesCard";
import {extractSwapiId} from "../../../utils";

export const Species = () => {
    const species = useSelector(state => state.species.all)
    const planetById = useSelector(state => state.planets.byId)

    return(
        <React.Fragment>
            {species.map(spec => (
                <SpeciesCard
                    name={spec.name}
                    average_height={spec.average_height}
                    average_lifespan={spec.average_lifespan}
                    classification={spec.classification}
                    designation={spec.designation}
                    eye_colors={spec.eye_colors}
                    hair_colors={spec.hair_colors}
                    homeworld={
                        extractSwapiId(spec.homeworld) ?
                            planetById[extractSwapiId(spec.homeworld)] :
                            'None'
                    }
                    language={spec.language}
                    people={spec.people}
                    films={spec.films}
                    skin_colors={spec.skin_colors}
                />
            ))}
        </React.Fragment>
    )
}

