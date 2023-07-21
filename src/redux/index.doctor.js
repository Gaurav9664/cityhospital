import { combineReducers } from "redux";
import { doctorReducer } from "./reducer/doctor.reducer";


export const rootDoctorReducer = combineReducers({
    doctors: doctorReducer
})