import {ClientProduct, ClientProductDTO} from './product';

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

export interface ClientOrderDTO {
  id: string
  user_name: string;
  user_surname: string;
  user_address: string;
  products: ClientProductDTO[];
  total_value: number;
  created: string;
}
export interface ClientOrder {
  id: string;
  userName: string;
  userSurname: string;
  userAddress: string;
  products: ClientProduct[];
  totalValue: number;
  created: string;
}
