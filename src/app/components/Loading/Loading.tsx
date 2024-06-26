import "./Loading.scss";
export default function Loading({dataStatus}) {
  return (
    <div className={`loading ${dataStatus}`}>
      <img className="pikachu-running" src='https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif' alt='img not found' loading="lazy"/>
      <img className="loading-leyenda" src="https://pa1.narvii.com/6897/245db99fecac034fa1ff447938114a3dc0bb405br1-800-800_hq.gif" alt='img not found' loading="lazy"/>
    </div>
  )
}
