import "./PokemonCard.scss";

export default function PokemonCard({data = {name: '',  sprites: {front_default:''}, types: [{type: {name:''}}]}}) {
  return (
    <div className="pokemon-card">
      <p className="pokemon-name">{data.name}</p>
      <img className="pokemon-image" src={data.sprites.front_default} alt="" />
      <div className="pokemon-types">
      {
        data.types.map((type)=>(
          <div className="li-pokemon-type" key={type.type.name}>
            <p className="pokemon-type-text" >{type.type.name}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}
