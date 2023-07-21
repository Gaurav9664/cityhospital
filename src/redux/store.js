import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { rootDoctorReducer} from "./index.doctor";

export const configureStore = () => {
    let store = createStore(rootDoctorReducer, applyMiddleware(thunk))

    return store;
}