import { legacy_createStore as createStore} from "redux";
import { CReducer } from "./count/CReducer";
// import { combineReducers, legacy_createStore as createStore} from "redux";


export const Store = createStore(CReducer);

console.log("store",Store);