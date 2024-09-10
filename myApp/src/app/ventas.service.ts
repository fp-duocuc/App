import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private totalVentas: number = 0;

  // Método para obtener el total de ventas
  obtenerTotalVentas(): number {
    return this.totalVentas;
  }

  // Método para agregar una nueva venta al total
  agregarVenta(monto: number) {
    this.totalVentas += monto;
  }
}
