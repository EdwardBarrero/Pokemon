export enum OrderOptions {
  AZ = 'az',
  ZA = 'za',
  HP = 'hp',
  ATK = 'atk',
  DEF = 'def'
}

export interface OrderButtons {
  orderType: OrderOptions;
  class: string;
  label: string;
}

export const ORDER_OPTIONS: OrderButtons[] = [
  {orderType: OrderOptions.AZ, class: 'order-modal-btn-az', label: 'A - Z'},
  {orderType: OrderOptions.ZA, class: 'order-modal-btn-za', label: 'Z - A'},
  {orderType: OrderOptions.HP, class: 'order-modal-btn-hp', label: 'HP'},
  {orderType: OrderOptions.ATK, class: 'order-modal-btn-atk', label: 'ATK'},
  {orderType: OrderOptions.DEF, class: 'order-modal-btn-def', label: 'DEF'},
]