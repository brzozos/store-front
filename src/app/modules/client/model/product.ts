export interface Product {
    id: string;
    name: string;
    unitPrice: number;
    amount: number;
    selectedAmount: number;
    isSelected: boolean;
}

export interface ProductDTO {
    id: string;
    name: string;
    unit_price: number;
    amount: number;
}

export interface ClientProductDTO {
  name: string;
  unit_price: number;
  amount: number;
}

export interface ClientProduct {
  name: string;
  unit_price: number;
  amount: number;
}
