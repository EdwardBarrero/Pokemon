import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface PokemonState {
  pokemonNames : [];
  pokemons:any[];
  pokemonTypes: [];
};

const initialState : PokemonState = {
  pokemonNames : [],
  pokemons: [],
  pokemonTypes: [],
};

export const HomeSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemonsNames : (state, action : PayloadAction<any>) => {
      state.pokemonNames = action.payload;
    },
    getPokemonsData : (state, action: PayloadAction<any>) => {
      if(state.pokemons.length < 20){
        state.pokemons = [...state.pokemons, action.payload]
      } 
    },
    getPokemonsDataTwo : (state, action: PayloadAction<any>) => {
      state.pokemons = [...state.pokemons, action.payload]
    },
    clearPokemonsData: (state) => {
      state.pokemons = [];
    },
    getAllPokemonTypes: (state, action: PayloadAction<any>) => {
      state.pokemonTypes = action.payload.results
    }
  }
})

export const { getPokemonsNames, getPokemonsData, clearPokemonsData, getAllPokemonTypes, getPokemonsDataTwo } = HomeSlice.actions;

export const selectPokemonsNames = (state: RootState) => state.pokemons.pokemonNames;
export const selectPokemons = (state: RootState) => state.pokemons.pokemons;
export const selectPokemonTypes = (state: RootState) => state.pokemons.pokemonTypes;

export default HomeSlice.reducer;