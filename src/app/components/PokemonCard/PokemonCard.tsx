import { TYPES, STATS } from "../../constants/constants";
import { DICTIONARY } from "../../constants/dictionary";

import "./PokemonCard.scss";

export default function PokemonCard({data = {name: '',  sprites: {front_default:''}, types: [{type: {name:''}}]}}) {
  
  return (
    <div className="pokemon-card">
      <div className="pokemon-info">
        <p className="pokemon-info-name">{data.name.toUpperCase()}</p>
        <div className="pokemon-info-stats">
          <div className="pokemon-info-stat-hp">
            <img className='stat-hp-icon' src={STATS.hp} alt="" loading="lazy"/>
            <p className="stat-hp-number">{data['stats'][0].base_stat}</p>
          </div>
          <div className="pokemon-info-stat-attack">
            <img className="stat-attack-icon" src={STATS.attack} alt="" loading="lazy"/>
            <p className="stat-attack-number">{data['stats'][1].base_stat}</p>
          </div>
          <div className="pokemon-info-stat-defense">
            <img className="stat-defense-icon" src={STATS.defense} alt="" loading="lazy"/>
            <p className="stat-defense-number">{data['stats'][2].base_stat}</p>
          </div>
        </div>
      </div>
      <img className="pokemon-image" src={data.sprites.front_default} alt="" loading="lazy"/>
      <div className="pokemon-types">
      {
        data.types.map((type)=>(
          <div className="li-pokemon-type" key={type.type.name}>
            <img className="pokemon-type-icon" src={TYPES[type.type.name]} alt="" loading="lazy"/>
            <p className="pokemon-type-text" >{DICTIONARY[type.type.name].toUpperCase()}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}
