import {
    ADD_FETCHED_FILMS,
    ADD_FETCHED_PEOPLE, ADD_FETCHED_PLANETS,
    ADD_FETCHED_SPECIES,
    ADD_FETCHED_STARSHIPS,
    ADD_FETCHED_VEHICLES
} from "./types";
import {querySwapi} from "../../utils";

const apiURL = 'https://swapi.dev/api'

export const fetchPeople = () => {
    return (dispatch) => {
        return querySwapi(apiURL + '/people').then(data => {
            dispatch({type: ADD_FETCHED_PEOPLE, payload: data})
        })
    }
}

export const fetchStarships = () => {
    return (dispatch) => {
        return querySwapi(apiURL + '/starships').then(data => {
            dispatch({type: ADD_FETCHED_STARSHIPS, payload: data})
        })
    }
}

export const fetchSpecies = () => {
    return (dispatch) => {
        return querySwapi(apiURL + '/species').then(data => {
            dispatch({type: ADD_FETCHED_SPECIES, payload: data})
        })
    }
}

export const fetchVehicles = () => {
    return (dispatch) => {
        return querySwapi(apiURL + '/vehicles').then(data => {
            dispatch({type: ADD_FETCHED_VEHICLES, payload: data})
        })
    }
}

export const fetchPlanets = () => {
    return (dispatch) => {
        return querySwapi(apiURL + '/planets').then(data => {
            dispatch({type: ADD_FETCHED_PLANETS, payload: data})
        })
    }
}

export const fetchFilms = () => {
    return (dispatch) => {
        return querySwapi(apiURL + '/films').then(data => {
            dispatch({type: ADD_FETCHED_FILMS, payload: data})
        })
    }
}