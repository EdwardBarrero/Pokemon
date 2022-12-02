import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getAllPokemons } from "../../app/services/pokemonServices";
import { selectPokemons } from "./HomeSlice";

import PokemonCard from "../../app/components/PokemonCard/PokemonCard";
import "./Home.scss";

let number : number = 0;
export default function Home() {
  const [dataStatus, setDataStatus] = useState('active');
  const pokemons = useAppSelector(selectPokemons);
  useEffect(() =>{
    getAllPokemons(0);
  },[])
  useEffect(() => {
    setDataStatus('active');
    loading();
  },[pokemons])

  function loading () {
    setTimeout(() => {
      if(Object.keys(pokemons).length != 0){
        setDataStatus('disactive');
      } 
    }, 3000);
  };
  
  return (
    <div>
      <div className={`loading ${dataStatus}`}>
        <img className="pikachu-running" src='https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif' />
        <img className="loading-leyenda" src="https://pa1.narvii.com/6897/245db99fecac034fa1ff447938114a3dc0bb405br1-800-800_hq.gif" alt="" />
        <div className="background-loading"></div>
      </div>
      <div>
        <PokemonCard data={pokemons[0]} />
      </div>
    </div>
  )
}
