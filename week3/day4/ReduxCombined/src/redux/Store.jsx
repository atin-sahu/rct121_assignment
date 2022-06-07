import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { CReducer } from "./counter/CReducer";
import { TReducer } from "./todo/TReducer";
import thunk  from "redux-thunk"
import { AuthReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    counterReducer:CReducer,
    todoReducer:TReducer,
    authReducer: AuthReducer
})

export const Store = createStore(rootReducer,applyMiddleware(thunk));
console.log("store", Store.getState());