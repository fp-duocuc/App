import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-listaorganos',
  templateUrl: './listaorganos.page.html',
  styleUrls: ['./listaorganos.page.scss'],
})
export class ListaorganosPage implements OnInit {
  items = [
    {
      nombre: 'Órgano 1',
      descripcion: 'Descripción del Órgano 1',
      imagen: 'assets/img/organo1.jpg',
      precio: 32990
    },
    {
      nombre: 'Órgano 2',
      descripcion: 'Descripción del Órgano 2',
      imagen: 'assets/img/organo2.jpg',
      precio: 34990
    }
  ];

  constructor(private carritoService: CarritoService) { }

  ngOnInit() { }

  agregarAlCarrito(item: any) {
    this.carritoService.agregarAlCarrito(item);
  }

  // Mostrar la cantidad de un producto en el carrito
  cantidadEnCarrito(nombreProducto: string): number {
    const producto = this.carritoService.obtenerCarrito().find(p => p.nombre === nombreProducto);
    return producto ? producto.cantidad : 0;
  }
}
