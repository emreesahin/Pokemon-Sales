import { PokeListResponse } from "../models/responses/PokeListResponse.interface";
import { pokeList } from "./Actions";
import { POKELIST } from "./Constants";


type Actions = ReturnType<typeof pokeList>  ;


export const pokeListReducer = (state = [] as PokeListResponse[], action: Actions) => {
    switch(action.type) {
        case POKELIST: { 
            return action.payload;
            
        }
        default: 
            return state;
    }
}