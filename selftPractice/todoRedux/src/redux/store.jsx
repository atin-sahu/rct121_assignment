import { combineReducers, legacy_createStore as createStore } from "redux";
import { TReducer } from "./todo/TReducer";
import { CReducer } from "./count/CReducer";

const rootReeducer = combineReducers({
    countReducer:CReducer,
    todoReducer:TReducer
})

export const Store = createStore(rootReeducer);
console.log("Store",Store.getState());
