import { combineReducers, legacy_createStore as createStore} from "redux";
import { CReducer } from "./counter/CReducer";
import { TReducer } from "./todo/TReducer";

const rootReducer = combineReducers({
    counterReducer:CReducer,
    todoReducer:TReducer
})

export const Store = createStore(rootReducer);
console.log("store", Store.getState());