import {ADD_FETCHED_PEOPLE} from "../actions/types";

const initialState = {
    all: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case ADD_FETCHED_PEOPLE:
            return {all: action.payload};
        default:
            return state;
    }
}