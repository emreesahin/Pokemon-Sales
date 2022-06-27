export interface PokemonDetailsResponse {
    name: string
    sprites: {
        back_shiny: string
        front_shiny: string
    }
    types: {
        slot: number
        type: {
            name: string;
        }
    }[];
}