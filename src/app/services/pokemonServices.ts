import axios from 'axios';
import { store } from '../store';
import { getPokemonsNames, getPokemonsData, clearPokemonsData, getAllPokemonTypes, getPokemonsDataTwo } from "../../features/home/HomeSlice";

export function getAllPokemonsPerPage(offset:number){
  let data: []= [];
  store.dispatch(clearPokemonsData())
  axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
  .then(response => {
    data = response.data.results.map((pokemon:any)=>{
      getPokemonData(pokemon.name)
      return {name: pokemon.name}
    });
    store.dispatch(getPokemonsNames(data))
  })
  .catch(error => {throw new Error(error)});
};

export function getPokemonData(name:string){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  .then(response => store.dispatch(getPokemonsData(response.data)))
  .catch(error => {throw new Error(error)});
};
export function getPokemonDataTwo(name:string){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  .then(response => store.dispatch(getPokemonsDataTwo(response.data)))
  .catch(error => {throw new Error(error)});
};

export function getPokemonTypes(){
  axios.get('https://pokeapi.co/api/v2/type')
  .then(response => store.dispatch(getAllPokemonTypes(response.data)))
  .catch(error => {throw new Error(error)});
}

export function getFilterPokemons(filterType:string){
  let data: []= [];
  store.dispatch(clearPokemonsData());
  axios.get(`https://pokeapi.co/api/v2/type/${filterType}`)
  .then((response) => {
    data = response.data.pokemon.map((pokemon) => {
      getPokemonDataTwo(pokemon.pokemon.name)
      return {name: pokemon.pokemon.name}
    });
    store.dispatch(getPokemonsNames(data))
  })
  .catch(error => {throw new Error(error)});
};