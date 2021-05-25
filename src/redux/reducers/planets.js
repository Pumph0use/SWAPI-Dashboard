import {ADD_FETCHED_PLANETS} from "../actions/types";
import {extractSwapiId} from "../../utils";

const initialState = {
    all: [],
    byId: {}
}

export default function(state = initialState, action){
    switch (action.type){
        case ADD_FETCHED_PLANETS:
            let byIdMap = {}
            action.payload.map(planet => byIdMap[extractSwapiId(planet.url)] = planet.name)
            return {all: action.payload, byId: byIdMap}
        default:
            return state
    }
}