import { useAppSelector } from "../../hooks";
import { TYPES, STATS, UTILITIES } from "../../constants/constants";
import { DICTIONARY } from "../../constants/dictionary";
import { clearPokemonReducer } from "../../services/pokemonServices";
import "./PokemonDetail.scss";
export default function PokemonDetail({setDisplayDetail, setLightStatus, setPokemon}) {
  const pokemon = useAppSelector(state => state.pokemons.pokemon);
  function goBackHandle(){
    clearPokemonReducer();
    setDisplayDetail('');
    setLightStatus('');
    setPokemon('');
  }
  return (
    <>
    { Object.keys(pokemon).length > 0 &&
    <div className="pokemon-detail-container">
      <img onClick={goBackHandle} className="back-arrow" src={UTILITIES.backArrow} alt="" />
      <img className="pokemon-detail-img" src={pokemon['sprites']['front_default']} alt="" />
      <p className="pokemon-detail-name">{pokemon['name'].toUpperCase()}</p>
      <div className="pokemon-detail-types">
        {
          pokemon['types'].map((type:any) => (
            <div className="li-pokemon-type">
              <img className="pokemon-type-icon" src={TYPES[type.type.name]} alt="" />
              <p className="pokemon-type-text" >{DICTIONARY[type.type.name].toUpperCase()}</p>
            </div>
          ))
        }
      </div>
      <div className="pokemon-detail-stats">
        <div className="pokemon-info-stat-hp">
          <img className='stat-hp-icon' src={STATS.hp} alt="" />
          <p className="stat-hp-number">{pokemon['stats'][0].base_stat}</p>
        </div>
        <div className="pokemon-info-stat-attack">
          <img className="stat-attack-icon" src={STATS.attack} alt="" />
          <p className="stat-attack-number">{pokemon['stats'][1].base_stat}</p>
        </div>
        <div className="pokemon-info-stat-defense">
          <img className="stat-defense-icon" src={STATS.defense} alt="" />
          <p className="stat-defense-number">{pokemon['stats'][2].base_stat}</p>
        </div>
      </div>
      <div className="pokemon-detail-anatomy">
        <div className="pokemon-anatomy-height">
          <p className="pokemon-anatomy-title">Altura:</p>
          <p className="pokemon-anatomy-value">{pokemon['height']}</p>
        </div>
        <div className="pokemon-anatomy-weight">
          <p className="pokemon-anatomy-title">Peso:</p>
          <p className="pokemon-anatomy-value">{pokemon['weight']}</p>
        </div>
      </div>
    </div>
    }
    </>
  )
}
