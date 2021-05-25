import {ADD_FETCHED_VEHICLES} from "../actions/types";

const initialState = {
    all: []
}

export default function(state = initialState, action){
    switch (action.type){
        case ADD_FETCHED_VEHICLES:
            return {all: action.payload}
        default:
            return state
    }
}