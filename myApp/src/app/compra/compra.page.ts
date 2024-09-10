import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { VentasService } from '../ventas.service'; // Importar el servicio de ventas
import { NavController } from '@ionic/angular'; // Para redireccionar a la página de ventas

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(
    private carritoService: CarritoService,
    private ventasService: VentasService, // Inyectar el servicio de ventas
    private navCtrl: NavController // Inyectar para navegar entre páginas
  ) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.calcularTotal();
  }

  actualizarCantidad(producto: any, nuevaCantidad: number) {
    const index = this.carrito.findIndex(item => item.nombre === producto.nombre);
    if (index !== -1 && nuevaCantidad > 0) {
      this.carrito[index].cantidad = nuevaCantidad;
      this.carritoService.actualizarCarrito(this.carrito);
      this.calcularTotal();
    }
  }

  eliminarProducto(producto: any) {
    this.carrito = this.carrito.filter(item => item !== producto);
    this.carritoService.actualizarCarrito(this.carrito);
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  }

  pagar() {
    // Crear un objeto con los detalles de la compra
    const compra = {
      items: this.carrito,
      total: this.total,
      fecha: new Date()
    };

    // Guardar la compra en el servicio de ventas
    this.ventasService.agregarVenta(this.total);

    // Limpiar el carrito después de la compra
    this.carritoService.actualizarCarrito([]);
    this.total = 0;

    // Redirigir a la página de ventas
    this.navCtrl.navigateForward('/listaorganos');
  }

  disminuirCantidad(producto: any) {
    if (producto.cantidad > 1) {
      this.actualizarCantidad(producto, producto.cantidad - 1);
    }
  }

  aumentarCantidad(producto: any) {
    this.actualizarCantidad(producto, producto.cantidad + 1);
  }
}
