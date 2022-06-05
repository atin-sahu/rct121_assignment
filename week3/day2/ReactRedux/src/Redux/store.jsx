import { DecCount, IncCount } from "./Action";
import { reducer } from "./Redeucer";

class Store {
    #reducer
    #state
    #listners
    constructor(reducer,initState){
        // private fields
        this.#reducer = reducer;
        this.#state = initState;
        this.#listners = [];
    }
    getState(){
        return this.#state;
    }
    dispatch(action){
        // update state
        const oldState = this.#state;
        this.#state = this.#reducer(this.#state,action)
        console.log(this.#state === oldState)
        if(oldState !== this.#state){
            this.#listners.forEach((listner) => listner());
        }
    }
    subscribe(listner){
        this.#listners.push(listner);
    }
}

const initState = { count : 0 };
export const store = new Store(reducer, initState);

store.subscribe( ()=>{
    console.log("store has got updated",store.getState());
})

store.dispatch(IncCount())
store.dispatch(DecCount())