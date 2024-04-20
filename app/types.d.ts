export interface Share {
  name: string;
  quantityOwned: number;
  price: number;
  currency: string;
}

export interface Money {
  currency: string;
  amount: number;
}
