import "./DirectionArrow.scss";
export default function DirectionArrow() {
  return (
    <div className="direction-arrow">
      <div className="direction-arrow-background"></div>
      <div className="direction-arrow-btn">
        <div className="direction-arrow-btn-x"></div>
        <div className="direction-arrow-btn-y"></div>
        <div className="direction-arrow-btn-x-cover"></div>
      </div>
    </div>
  )
}
