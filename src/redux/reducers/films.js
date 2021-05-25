import {ADD_FETCHED_FILMS} from "../actions/types";

const initialState = {
    all: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case ADD_FETCHED_FILMS:
            return {all: action.payload}
        default:
            return state
    }
}