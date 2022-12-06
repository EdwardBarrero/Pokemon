import "./LightBulbs.scss";
export default function LightBulbs({status}) {
  return (
    <div className="light-bulbs">
      <div className="light-bulbs-border-disactive"></div>
      <div className="light-bulbs-disactive"></div>
      <div className={`light-bulbs-border-active ${status}`}></div>
      <div className={`light-bulbs-active ${status}`}></div>
    </div>
  )
}
