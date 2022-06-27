import { createStore , combineReducers, Store, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { pokeListReducer } from "./Reducer"

const reducers = combineReducers ({pokeListReducer})

export function configureStore(): Store <any> {
    return createStore (reducers , applyMiddleware(thunk));
}
export type RootState = ReturnType <typeof reducers> ;
