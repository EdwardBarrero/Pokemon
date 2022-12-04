import { TYPES } from "../../constants/constants";
import { DICTIONARY } from "../../constants/dictionary";

import "./PokemonCard.scss";

export default function PokemonCard({data = {name: '',  sprites: {front_default:''}, types: [{type: {name:''}}]}}) {
  
  return (
    <div className="pokemon-card">
      <div className="pokemon-name">{data.name.toUpperCase()}</div>
      <img className="pokemon-image" src={data.sprites.front_default} alt="" />
      <div className="pokemon-types">
      {
        data.types.map((type)=>(
          <div className="li-pokemon-type" key={type.type.name}>
            <img className="pokemon-type-icon" src={TYPES[type.type.name]} alt="" />
            <p className="pokemon-type-text" >{DICTIONARY[type.type.name].toUpperCase()}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}
