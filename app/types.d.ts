export interface Share {
  name: string;
  currentValue: number;
  quantityOwned: number;
  price: number;
}

export interface Money {
  currency: string;
  amount: number;
}
