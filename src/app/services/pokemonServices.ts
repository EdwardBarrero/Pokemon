import axios from 'axios';
import { store } from '../store';
import { getPokemonsNames, getPokemonsData, clearPokemonsData } from "../../features/home/HomeSlice";

export function getAllPokemonsPerPage(offset:number){
  let data:[]=[];
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
  axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}/`)
  .then(response => store.dispatch(getPokemonsData(response.data)))
  .catch(error => {throw new Error(error)});
};