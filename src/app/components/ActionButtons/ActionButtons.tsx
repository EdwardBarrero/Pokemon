import "./ActionButtons.scss";

export default function ActionButtons({setFilterActived, filterActived, orderActived, setOrderActived}) {
  function setFilterStatusHandle() {
    filterActived !== '' ? setFilterActived('') : setFilterActived('filter-modal-actived');
  }
  function setOrderStatusHandle(){
    orderActived !== '' ? setOrderActived('') : setOrderActived('order-modal-actived');
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
