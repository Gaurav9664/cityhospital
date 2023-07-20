import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./index.doctor";

export const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk))

    return store;
}