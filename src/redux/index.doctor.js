import { combineReducers } from "redux";
import { doctorReducer } from "./reducer/doctor.reducer";


export const rootReducer = combineReducers({
    doctors: doctorReducer
})