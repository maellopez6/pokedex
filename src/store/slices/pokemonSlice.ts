import { createSlice } from "@reduxjs/toolkit";
import type { IPokemonData } from "../types/pokemon.type";

interface PokemonState {
  list: IPokemonData[];
}

const initialState: PokemonState = {
  list: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
