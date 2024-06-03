import "./ActionButtons.scss";

interface Props {
  setFilterActived: (value: boolean) => void;
  filterActived: boolean;
  orderActived: boolean;
  setOrderActived: (value: boolean) => void;
}

export default function ActionButtons({setFilterActived, filterActived, orderActived, setOrderActived}: Props) {
  function setFilterStatusHandle() {
    setFilterActived(!filterActived);
  }
  function setOrderStatusHandle(){
    setOrderActived(!orderActived);
  }
  
  return (
    <div className="action-btn">
      <div className="action-btn-background"></div>
      <div className="action-btn-btns">
        <div onClick={setFilterStatusHandle} className="action-btn-a">
          A
          <div className="action-btn-a-text">FILTRAR</div>
        </div>
        <div onClick={setOrderStatusHandle} className="action-btn-b">
          B
          <span className="action-btn-b-text">ORDENAR</span>
        </div>
      </div>
    </div>
  )
}
