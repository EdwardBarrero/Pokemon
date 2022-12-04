import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getAllPokemonsPerPage } from "../../app/services/pokemonServices";
import { selectPokemons } from "./HomeSlice";

import PokemonCard from "../../app/components/PokemonCard/PokemonCard";
import "./Home.scss";


let number : number = 0;
export default function Home() {
  const [dataStatus, setDataStatus] = useState('active');
  const [dataStatusTwo, setDataStatusTwo] = useState('disactiveTwo');
  const [pageNumber, setPageNumber] = useState(1);
  const [animationState, setAnimationState] = useState('on-animation-home');
  const pokemons = useAppSelector(selectPokemons);

  let offset = (pageNumber*20)-20
  
  useEffect(() => {
    animationHome();
  }, [])
  useEffect(() =>{
    getAllPokemonsPerPage(offset);
  },[pageNumber])
  useEffect(() => {
    setDataStatus('active');
    setDataStatusTwo('disactiveTwo');
    loading();
  },[pokemons])

  function animationHome() {
    setTimeout(() => {
      setAnimationState('off-animation-home')
    }, 500)
  }

  function loading () {
    setTimeout(() => {
      if(Object.keys(pokemons).length != 0){
        setDataStatus('disactive');
        setDataStatusTwo('activeTwo');
      } 
    }, 2000);
  };
  function nextPageHadle(page: number){
    page < 15 && setPageNumber(page + 1);
  }
  function prevPageHadle(page: number){
    page > 1 && setPageNumber(page - 1);
  }
  
  return (
    <div className={`container-home ${animationState}`}>
      <div className={`loading ${dataStatus}`}>
        <img className="pikachu-running" src='https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif' />
        <img className="loading-leyenda" src="https://pa1.narvii.com/6897/245db99fecac034fa1ff447938114a3dc0bb405br1-800-800_hq.gif" alt="" />
        <div className="background-loading"></div>
      </div>
      <div className={'homepage'}>
      <div className="control-btns">
        <div className="light-bulbs">
          <div className="light-bulbs-border-disactive"></div>
          <div className="light-bulbs-disactive"></div>
          <div className="light-bulbs-border-active"></div>
          <div className="light-bulbs-active"></div>
        </div>
        <div className="direction-arrow">
          <div className="direction-arrow-background"></div>
          <div className="direction-arrow-btn">
            <div className="direction-arrow-btn-x"></div>
            <div className="direction-arrow-btn-y"></div>
            <div className="direction-arrow-btn-x-cover"></div>
          </div>
        </div>
        <div className="action-btn">
          <div className="action-btn-background"></div>
          <div className="action-btn-btns">
            <div className="action-btn-a">A</div>
            <div className="action-btn-b">B</div>
          </div>
        </div>
        <div className={`pagination-btns`} >
          <button onClick={()=>prevPageHadle(pageNumber)} className="prev-btn"></button>
            <span className="prev-btn-text">PREV</span>
          <button onClick={()=>nextPageHadle(pageNumber)} className="next-btn"></button>
            <span className="next-btn-text">NEXT</span>
        </div>
      </div>
        <div className={`pokemon-cards`}>
        {
          pokemons.map((pokemon) => (
            <div className={`pokemon-card-home ${dataStatusTwo}`}>
              <PokemonCard data={pokemon} />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}
