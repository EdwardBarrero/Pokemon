import axios from 'axios';
import * as HomeSlice from "../../features/home/HomeSlice";
import { store } from '../store';

const API = process.env.REACT_APP_API;

export function getAllPokemonsPerPage(offset:number){
  let data: []= [];
  store.dispatch(HomeSlice.clearPokemonsData())
  axios.get(`${API}pokemon?offset=${offset}&limit=20`)
  .then(response => {
    data = response.data.results.map((pokemon:any)=>{
      getPokemonData(pokemon.name)
      return {name: pokemon.name}
    });
    store.dispatch(HomeSlice.getPokemonsNames(data))
  })
  .catch(error => {throw new Error(error)});
};

export function getPokemonData(name:string){
  axios.get(`${API}pokemon/${name}/`)
  .then(response => store.dispatch(HomeSlice.getPokemonsData(response.data)))
  .catch(error => {throw new Error(error)});
};
export function getPokemonDataTwo(name:string){
  axios.get(`${API}pokemon/${name}/`)
  .then(response => store.dispatch(HomeSlice.getPokemonsDataTwo(response.data)))
  .catch(error => {throw new Error(error)});
};

export function getPokemonTypes(){
  axios.get(`${API}type`)
  .then(response => store.dispatch(HomeSlice.getAllPokemonTypes(response.data)))
  .catch(error => {throw new Error(error)});
}

export function getFilterPokemons(filterType:string){
  let data: []= [];
  store.dispatch(HomeSlice.clearPokemonsData());
  axios.get(`${API}type/${filterType}`)
  .then((response) => {
    data = response.data.pokemon.map((pokemon) => {
      getPokemonDataTwo(pokemon.pokemon.name)
      return {name: pokemon.pokemon.name}
    });
    store.dispatch(HomeSlice.getPokemonsNames(data))
  })
  .catch(error => {throw new Error(error)});
};

export function getPokemon(id:string){
  axios.get(`${API}pokemon/${id}/`)
  .then(response => store.dispatch(HomeSlice.getPokemon(response.data)))
  .catch(error => {throw new Error(error)});
};

export function clearPokemonReducer(){
  store.dispatch(HomeSlice.clearPokemonData());
}

export function orderPokemonsBy(pokemons:any[], order:string){
  let data : any[];
  switch (order){
    case 'az':
       data = pokemons.sort((a, b) => {
        if(a.name > b.name) {
          return 1
        }
        if(a.name < b.name) {
          return -1
        }
        return 0
      })
      store.dispatch(HomeSlice.orderPokemons(data));
    break;
    case 'za':
       data = pokemons.sort((a, b) => {
        if(a.name > b.name) {
          return -1
        }
        if(a.name < b.name) {
          return 1
        }
        return 0
      })
      store.dispatch(HomeSlice.orderPokemons(data));
    break;
    case 'hp':
      data = pokemons.sort((a, b) => {
        if(a.stats[0].base_stat > b.stats[0].base_stat) {
          return -1
        }
        if(a.stats[0].base_stat < b.stats[0].base_stat) {
          return 1
        }
        return 0
      })
      store.dispatch(HomeSlice.orderPokemons(data));
    break;
    case 'atk':
      data = pokemons.sort((a, b) => {
        if(a.stats[1].base_stat > b.stats[1].base_stat) {
          return -1
        }
        if(a.stats[1].base_stat < b.stats[1].base_stat) {
          return 1
        }
        return 0
      })
      store.dispatch(HomeSlice.orderPokemons(data));
    break;
    case 'def':
      data = pokemons.sort((a, b) => {
        if(a.stats[2].base_stat > b.stats[2].base_stat) {
          return -1
        }
        if(a.stats[2].base_stat < b.stats[2].base_stat) {
          return 1
        }
        return 0
      })
      store.dispatch(HomeSlice.orderPokemons(data));
    break;
    default:
      return pokemons;
  }
}