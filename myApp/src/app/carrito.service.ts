import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    const productoExistente = this.carrito.find(item => item.nombre === producto.nombre);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  actualizarCarrito(carritoActualizado: any[]) {
    this.carrito = carritoActualizado;
  }

  obtenerCantidadCarrito() {
    return this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  }
}
