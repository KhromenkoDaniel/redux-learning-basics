import {combineReducers, createStore} from "redux";
import {customerReducer} from "./customerReducer";
import {cashReducer} from "./cashReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
