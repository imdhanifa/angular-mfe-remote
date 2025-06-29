import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

Injectable({providedIn: 'root'});

export class ProductsService {
  isLoggedIn = new Subject<boolean>();
  public products = [
    {
      id: 101,
      make: 'Dell',
      price: 30000,
      color: 'black',
      ram: '8 GB',
      rom: '500 GB',
    },
    {
      id: 102,
      make: 'Dell',
      price: 40000,
      color: 'silver',
      ram: '8 GB',
      rom: '1 TB',
    },
    {
      id: 103,
      make: 'Compaq',
      price: 30000,
      color: 'black',
      ram: '8 GB',
      rom: '500 GB',
    },
    {
      id: 104,
      make: 'HP',
      price: 50000,
      color: 'white',
      ram: '16 GB',
      rom: '2 TB',
    },
    {
      id: 105,
      make: 'Lenovo',
      price: 40000,
      color: 'black',
      ram: '8 GB',
      rom: '1 TB',
    },
    {
      id: 106,
      make: 'Apple',
      price: 35000,
      color: 'white',
      ram: '8 GB',
      rom: '1 TB',
    },
    {
      id: 107,
      make: 'Microsoft',
      price: 35000,
      color: 'black',
      ram: '16 GB',
      rom: '500 GB',
    },
    {
      id: 108,
      make: 'Hp',
      price: 45000,
      color: 'black',
      ram: '8 GB',
      rom: '2 TB',
    },
    {
      id: 109,
      make: 'Compaq',
      price: 55000,
      color: 'black',
      ram: '16 GB',
      rom: '500 GB',
    },
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }
}
