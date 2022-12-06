import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { getPokemonTypes } from "../../services/pokemonServices";
import { TYPES } from "../../constants/constants";
import { DICTIONARY } from "../../constants/dictionary";
import { getFilterPokemons } from "../../services/pokemonServices";

import "./FilterTypes.scss";

export default function FilterTypes({filterActived, setFilterActived}) {
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    getPokemonTypes();
  },[]);
  const pokemonTypes  = useAppSelector(state => state.pokemons.pokemonTypes);

  function addFilterItemHandle (name : string){
    filter != name ? setFilter(name) : setFilter('');
  }

  function filterPokemonsHandle(){
    getFilterPokemons(filter);
    setFilterActived('');
  }
  return (
    <div className={`filter-modal ${filterActived}`}>
      <p className="filter-modal-title">FILTRAR POR:</p>
      <div className="filter-modal-content">
      {
        pokemonTypes?.map((type) => (
        <div key={type['name']} onClick={() => addFilterItemHandle(type['name'])} className={filter.includes(type['name']) ? "actived-filter-item" : 'filter-item'}>
          <img className="filter-item-icon" src={TYPES[type['name']]} alt="" />
          <p className="filter-item-text" >{DICTIONARY[type['name']]}</p>
        </div>
        ))
      }
      </div>
      <div className="filter-modal-footer">
        <button onClick={filterPokemonsHandle} className="filter-modal-trigger" type="button">FILTRAR</button>
        <button onClick={() => setFilterActived('')} className="filter-modal-cancel" type="button">CANCELAR</button>
      </div>
    </div>
  )
}
