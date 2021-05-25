import React from "react";
import {useSelector} from "react-redux";
import {VehicleCard} from "./vehicleCard";

export const Vehicles = () => {
    const vehicles = useSelector(state => state.vehicles.all)

    return(
        <React.Fragment>
            {vehicles.map(vehicle => (
                <VehicleCard
                    name={vehicle.name}
                    cargo_capacity={vehicle.cargo_capacity}
                    consumables={vehicle.consumables}
                    cost_in_credits={vehicle.cost_in_credits}
                    crew={vehicle.crew}
                    length={vehicle.length}
                    manufacturer={vehicle.manufacturer}
                    max_atmosphering_speed={vehicle.max_atmosphering_speed}
                    model={vehicle.model}
                    passengers={vehicle.passengers}
                    pilots={vehicle.pilots}
                    films={vehicle.films}
                    vehicle_class={vehicle.vehicle_class}
                />
            ))}
        </React.Fragment>
    )
}

