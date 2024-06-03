import { useState } from "react";
import { orderPokemonsBy } from "../../services/pokemonServices";
import { Modal } from "react-bootstrap";
import { ORDER_OPTIONS } from "./helpers";
import "./OrderPokemons.scss";

interface Props {
  orderActived: boolean;
  data: any[];
  onHide: () => void;
}

export default function OrderPokemons({orderActived, data, onHide}: Props) {
  const [order, setOrder] = useState('');
  function selectOrderHandle(type: string){
    setOrder(type)
    orderPokemonsBy(data, type);
    onHide();
  }  
  return (
    <Modal
      show={orderActived}
      onHide={onHide}
      centered
      size="sm"
    >
      <div className="card bg-light">
        <section className="card-body row align-items-center justify-content-center">
          {ORDER_OPTIONS.map((option) => 
            <button
              key={`order-option-${option.orderType}`}
              onClick={() => selectOrderHandle(option.orderType)}
              className={'col-6 col-md-4 m-1 order-btns' + (option.orderType === order ? ' order-btn-on' : '')}
            >
              {option.label}
            </button>
          )}
        </section>
      </div>
    </Modal>
  )
}
