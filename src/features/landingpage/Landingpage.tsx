import { useState } from "react";
import "./Landingpage.scss";

const pikachu = require("../../assets/pikachu.png");
const ash = require("../../assets/ash.png");
const bulbasor = require("../../assets/bulbasor.png");
const charmander = require("../../assets/charmander.png");
const pokemon = require("../../assets/pokemon.png");
const squertle = require("../../assets/squertle.png");
const pokeball = require('../../assets/pokeball.png');
const megaBulbasaur = require('../../assets/mega-bulbasaur.png');
const raichu = require('../../assets/raichu.png');
const charizard = require('../../assets/charizard.png');
const blastoise = require('../../assets/blastoise.png');
const ashLazando = require('../../assets/ash-lanzando-pokebola.png');

export default function Landingpage() {
  const [action, setAction] = useState('static');
  function routingHandle() {
    setAction('move cambiar-bg-color');
    setTimeout(() => {
      window.location.href = '/pokedex';
    }, 1000)
  }
  return (
    <>
    {/* <div className="bg-landing"></div> */}
    <div className={`landingpage ${action}`}>
      <div className="bulbasaur">
        <img className='imagen-bulbasaur' src={bulbasor}  alt='img not found'/>
        <img className='imagen-mega-bulbasaur' src={megaBulbasaur} alt='img not found'/>
        <p className={`texto-bulbasaur`}>BULBASUAR</p>
        <p className={`texto-mega-bulbasaur`}>VENUSAUR</p>
      </div>
      <div className="pikachu">
        <img className='imagen-pikachu' src={pikachu} alt='img not found'/>
        <img className='imagen-raichu' src={raichu} alt='img not found'/>
        <p className="texto-pikachu">PIKACHU</p>
        <p className="texto-raichu">RAICHU</p>
      </div>
      <div className="squirtle">
        <img className='imagen-squirtle' src={squertle} alt='img not found'/>
        <img className='imagen-blastoise' src={blastoise} alt='img not found'/>
        <p className="texto-squirtle">SQUIRTLE</p>
        <p className="texto-blastoise">BLASTOISE</p>
      </div>
      <div className="charmander">
        <img className='imagen-charmander' src={charmander} alt='img not found'/>
        <img className='imagen-charizard' src={charizard} alt='img not found'/>
        <p className="texto-charmander">CHARMANDER</p>
        <p className="texto-charizard">CHARIZARD</p>
      </div>
      <div className="ash">
        <img className='imagen-ash' src={ash} alt='img not found'/>
        <img className='imagen-ash-lanzando' src={ashLazando} alt='img not found'/>        
      </div>
      <img onClick={routingHandle} className="pokeball" src={pokeball} alt='img not found'/>  
      <img className='pokemon' src={pokemon} alt='img not found'/>
    </div>
    </>
  )
}
