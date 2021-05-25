import {ADD_FETCHED_STARSHIPS} from "../actions/types";

const initialState = {
    all: []
}

export default function (state = initialState, action) {
    switch (action.type){
        case ADD_FETCHED_STARSHIPS:
            return {all: action.payload};
        default:
            return state;
    }
}