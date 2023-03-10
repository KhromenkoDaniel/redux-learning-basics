import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "./customerReducer";
import {cashReducer} from "./cashReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
