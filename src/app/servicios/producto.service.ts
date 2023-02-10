import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listProductos: Producto[] = [
    {codigo: 123, descripcion: 'Fideo Vitorio', pcompra: 9, pventa: 10},
    {codigo: 124, descripcion: 'Fideo risos', pcompra: 5, pventa: 6},
    {codigo: 125, descripcion: 'Fideo fino', pcompra: 6, pventa: 7},
];

  constructor() { }

  getProducto() {
    return this.listProductos.slice();
  }
  
  agregarProductoo(producto: Producto) {
    this.listProductos.unshift(producto);
  }

  eliminarProducto(index: number){
    this.listProductos.splice(index, 1);

  }
}
