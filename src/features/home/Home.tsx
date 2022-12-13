import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getAllPokemonsPerPage, getPokemon } from "../../app/services/pokemonServices";
import { selectPokemons } from "./HomeSlice";

import PokemonCard from "../../app/components/PokemonCard/PokemonCard";
import ActionButtons from "../../app/components/ActionButtons/ActionButtons";
import PaginationButtons from "../../app/components/PaginationButtons/PaginationButtons";
import Loading from "../../app/components/Loading/Loading";
import LightBulbs from "../../app/components/LightBulbs/LightBulbs";
import DirectionArrow from "../../app/components/DirectionArrow/DirectionArrow";
import FilterTypes from "../../app/components/FilterTypes/FilterTypes";
import PokemonDetail from "../../app/components/PokemonDetail/PokemonDetail";

import "./Home.scss";
import OrderPokemons from "../../app/components/OrderPokemons/OrderPokemons";

export default function Home() {
  const [dataStatus, setDataStatus] = useState('active');
  const [dataStatusTwo, setDataStatusTwo] = useState('disactiveTwo');
  const [pageNumber, setPageNumber] = useState(1);
  const [animationState, setAnimationState] = useState('on-animation-home');
  const [filterActived, setFilterActived] = useState('');
  const [orderActived, setOrderActived] = useState('');
  // const [order, setOrder] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [displayDetail, setDisplayDetail] = useState('');
  const [lightStatus, setLightStatus] = useState('');
  const pokemons = useAppSelector(selectPokemons);
  const data = [...pokemons];
  
  useEffect(() => {
    animationHome();
  }, [])
  useEffect(() =>{
    let offset = (pageNumber*20)-20;
    getAllPokemonsPerPage(offset);
    // setOrder('');
  },[pageNumber])
  useEffect(() => {
    function loading () {
      setTimeout(() => {
        if(Object.keys(pokemons).length !== 0){
          setDataStatus('disactive');
          setDataStatusTwo('activeTwo');
        } 
      }, 2000);
    };
    setDataStatus('active');
    setDataStatusTwo('disactiveTwo');
    loading();
  },[pokemons])
  // useEffect(()=>{
  //   let data = [...pokemons]
  //   orderPokemonsBy(data, order);
  // }, [order, pokemons]);
  useEffect(()=>{
    if(pokemon !== '') getPokemon(pokemon);
  }, [pokemon]);

  function animationHome() {
    setTimeout(() => {
      setAnimationState('off-animation-home')
    }, 500)
  }

  function pokemonSelectedHandle(id: string){
    setDisplayDetail('display-detail');
    setLightStatus('actived-light-bulbs');
    setPokemon(id);
  }
    
  return (
    <div className={`container-home ${animationState}`}>
      <Loading dataStatus={dataStatus} />
      <div className={'homepage'}>
        <FilterTypes filterActived={filterActived} setFilterActived={setFilterActived} />
        <OrderPokemons orderActived={orderActived} data={data} />
        <div className="control-btns">
          <LightBulbs status={lightStatus}/>
          <DirectionArrow />
          <ActionButtons orderActived={orderActived} setOrderActived={setOrderActived} filterActived={filterActived} setFilterActived={setFilterActived} />
          <PaginationButtons pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
        <div className={`pokemon-detail ${displayDetail}`}>
          <PokemonDetail setDisplayDetail={setDisplayDetail} setLightStatus={setLightStatus} setPokemon={setPokemon}/>
        </div>
        <div className={`pokemon-cards`}>
        {
          data.map((pokemon) => (
            <div key={pokemon.id} onClick={()=>pokemonSelectedHandle(pokemon.id)} className={`pokemon-card-home ${dataStatusTwo}`}>
              <PokemonCard data={pokemon} />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}
