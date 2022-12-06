import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getAllPokemonsPerPage } from "../../app/services/pokemonServices";
import { selectPokemons } from "./HomeSlice";

import PokemonCard from "../../app/components/PokemonCard/PokemonCard";
import ActionButtons from "../../app/components/ActionButtons/ActionButtons";
import PaginationButtons from "../../app/components/PaginationButtons/PaginationButtons";
import Loading from "../../app/components/Loading/Loading";
import LightBulbs from "../../app/components/LightBulbs/LightBulbs";
import DirectionArrow from "../../app/components/DirectionArrow/DirectionArrow";
import FilterTypes from "../../app/components/FilterTypes/FilterTypes";

import "./Home.scss";
import OrderPokemons from "../../app/components/OrderPokemons/OrderPokemons";

export default function Home() {
  const [dataStatus, setDataStatus] = useState('active');
  const [dataStatusTwo, setDataStatusTwo] = useState('disactiveTwo');
  const [pageNumber, setPageNumber] = useState(1);
  const [animationState, setAnimationState] = useState('on-animation-home');
  const [filterActived, setFilterActived] = useState('');
  const [orderActived, setOrderActived] = useState('');
  const [order, setOrder] = useState('');
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
  useEffect(() => {
    orderPokemonsHandle();
  },[order])

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
  function orderPokemonsHandle(){
    // switch (order){
    //   case 'az':
    //     var pokemonsToShow = pokemons.sort((a, b) => {
    //       if(a.name > b.name) { 
    //         return 1
    //       }
    //       if(a.name < b.name) {
    //         return -1
    //       }
    //       return 0
    //     })
    //   break;
      
    // }
  }
    
  return (
    <div className={`container-home ${animationState}`}>
      <Loading dataStatus={dataStatus} />
      <div className={'homepage'}>
        <FilterTypes filterActived={filterActived} setFilterActived={setFilterActived} />
        <OrderPokemons orderActived={orderActived} setOrder={setOrder} order={order} />
        <div className="control-btns">
          <LightBulbs />
          <DirectionArrow />
          <ActionButtons orderActived={orderActived} setOrderActived={setOrderActived} filterActived={filterActived} setFilterActived={setFilterActived} />
          <PaginationButtons pageNumber={pageNumber} setPageNumber={setPageNumber}/>
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
