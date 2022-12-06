import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface PokemonState {
  pokemonNames : [];
  pokemons:any[];
  pokemonTypes: [];
  pokemon: {};
};

const initialState : PokemonState = {
  pokemonNames : [],
  pokemons: [],
  pokemonTypes: [],
  pokemon: {},
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
    clearPokemonData: (state) => {
      state.pokemon = {};
    },
    getAllPokemonTypes: (state, action: PayloadAction<any>) => {
      state.pokemonTypes = action.payload.results
    },
    orderPokemons : (state, action : PayloadAction<any>)=>{
      state.pokemons = action.payload;
    },
    getPokemon: (state, action: PayloadAction<any>)=>{
      state.pokemon = action.payload;
    },
  }
})

export const { getPokemonsNames, getPokemonsData, clearPokemonsData, getAllPokemonTypes, getPokemonsDataTwo, orderPokemons, getPokemon, clearPokemonData } = HomeSlice.actions;

export const selectPokemonsNames = (state: RootState) => state.pokemons.pokemonNames;
export const selectPokemons = (state: RootState) => state.pokemons.pokemons;
export const selectPokemonTypes = (state: RootState) => state.pokemons.pokemonTypes;
export const selectPokemon = (state: RootState) => state.pokemons.pokemon;

export default HomeSlice.reducer;