import { combineReducers } from "redux"
import people from "./people"
import starships from './starships'
import vehicles from "./vehicles";
import planets from "./planets";
import species from "./species";
import films from "./films";

export default combineReducers({people, starships, vehicles, planets, species, films})