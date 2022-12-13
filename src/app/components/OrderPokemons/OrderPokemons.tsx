import { useState } from "react";
import { orderPokemonsBy } from "../../services/pokemonServices";
import "./OrderPokemons.scss";
export default function OrderPokemons({orderActived, data}) {
  const [order, setOrder] = useState('');
  function selectOrderHandle(type: string){
    setOrder(type)
    orderPokemonsBy(data, type);
  }  
  return (
    <div className={`order-modal ${orderActived}`}>
      <button onClick={()=>selectOrderHandle('az')} className={order !== 'az' ? "order-modal-btn-az" : 'order-btn-on'}>A - Z</button>
      <button onClick={()=>selectOrderHandle('za')} className={order !== 'za' ? "order-modal-btn-za" : 'order-btn-on'}>Z - A</button>
      <button onClick={()=>selectOrderHandle('hp')} className={order !== 'hp' ? "order-modal-btn-hp" : 'order-btn-on'}>HP</button>
      <button onClick={()=>selectOrderHandle('atk')} className={order !== 'atk' ? "order-modal-btn-atk" : 'order-btn-on'}>ATQ</button>
      <button onClick={()=>selectOrderHandle('def')} className={order !== 'def' ? "order-modal-btn-def" : 'order-btn-on'}>DEF</button>
    </div>
  )
}
