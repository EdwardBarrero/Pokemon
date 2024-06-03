import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { getPokemonTypes } from "../../services/pokemonServices";
import { TYPES } from "../../constants/constants";
import { DICTIONARY } from "../../constants/dictionary";
import { getFilterPokemons } from "../../services/pokemonServices";
import { Modal } from "react-bootstrap";

import "./FilterTypes.scss";

interface Props {
  filterActived: boolean;
  setFilterActived: (value: boolean) => void;
}

export default function FilterTypes ({filterActived, setFilterActived}: Props) {
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    getPokemonTypes();
  },[]);
  const pokemonTypes  = useAppSelector(state => state.pokemons.pokemonTypes);

  function addFilterItemHandle (name : string){
    filter !== name ? setFilter(name) : setFilter('');
  }

  function filterPokemonsHandle(){
    getFilterPokemons(filter);
    setFilterActived(false);
  }
  return (
    <Modal
      show={filterActived}
      centered
    >
      <div className="card">
        <section className="card-body">
          <header className="text-center mb-3" >FILTRAR POR:</header>
          <div className="row w-100 mx-auto">
          {
            pokemonTypes?.map((type) => (
              <div className="col-12 col-md-4  col-sm-6" key={type['name']}>
                <div
                  key={type['name']}
                  onClick={() => addFilterItemHandle(type['name'])}
                  className={`text-center border my-1 d-flex flex-column align-items-center justify-content-center py-2 border-dark rounded cursor-pointer ${filter === type['name'] ? 'actived-filter-item' : ''}`}
                  >
                  <img width={'50'} src={TYPES[type['name']]} alt="" loading="lazy"/>
                  <span>{DICTIONARY[type['name']]}</span>
                </div>
              </div>
            ))
          }
          </div>
          <footer className="filter-modal-footer">
            <button onClick={filterPokemonsHandle} className="filter-modal-trigger" type="button">FILTRAR</button>
            <button onClick={() => setFilterActived(false)} className="filter-modal-cancel" type="button">CANCELAR</button>
          </footer>
        </section>
      </div>
    </Modal>
  )
}
