import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface PokemonState {
  pokemonNames : [];
  pokemons:any[];
};

const initialState : PokemonState = {
  pokemonNames : [],
  pokemons: [],
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
    clearPokemonsData: (state) => {
      state.pokemons = [];
    }
  }
})

export const { getPokemonsNames, getPokemonsData, clearPokemonsData } = HomeSlice.actions;

export const selectPokemonsNames = (state: RootState) => state.pokemons.pokemonNames;
export const selectPokemons = (state: RootState) => state.pokemons.pokemons;

export default HomeSlice.reducer;