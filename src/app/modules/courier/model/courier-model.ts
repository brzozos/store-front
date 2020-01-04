export interface CourierOrder {
  id: string;
  userName: string;
  userSurname: string;
  userAddress: string;
  totalValue: number;
  route: OrderRoute;
  created: string;
  status: string;
}

export interface CourierOrderDTO {
  id: string;
  user_name: string;
  user_surname: string;
  user_address: string;
  total_value: number;
  route: OrderRoute;
  created: string;
  status: string;
}

export interface OrderRoute {
  distance: number;
  duration: number;
  steps: OrderRoutesStep[];
}

export interface OrderRoutesStep {
  distance: number;
  duration: number;
  instruction: string;
}
