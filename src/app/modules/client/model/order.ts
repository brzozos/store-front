export interface OrderDTO {
  user_name: string;
  user_surname: string;
  user_address: string;
  products: OrderProductDTO[];
}

export interface OrderProductDTO {
  name: string;
  amount: number;
}
