import { PokeListResponse } from "../models/responses/PokeListResponse.interface";
import { POKELIST } from "./Constants";

export const pokeList = (data: PokeListResponse[]) =>
 ({
    type: POKELIST,
    payload: data,
}as const);   