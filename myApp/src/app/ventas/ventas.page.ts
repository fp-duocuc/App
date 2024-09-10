import { Component, OnInit } from '@angular/core';
import { VentasService } from '../ventas.service';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  trabajadores = [
    {
      nombre: 'Maria Gonzales',
      foto: 'assets/img/maria.jpg',
      rut: '12345678-9', 
      desempeno: 'Bueno', 
      cargo: 'Gerente de Ventas',
      ventasTotales: 500000,
      fechaContratacion: '2020-01-15',  // Agrega la fecha de contratación
      contratoFirmado: true  // Define si el contrato está firmado o no

    },
    // Agrega más empleados si es necesario
  ];

  totalVentas: number = 0;

  constructor(private ventasService: VentasService, private navCtrl: NavController) {}

  ngOnInit() {
    this.totalVentas = this.ventasService.obtenerTotalVentas();
  }

  verVentasTrabajador(trabajador: any) {
    // Aquí redirigimos a la página de empleados con la información del empleado seleccionado
    this.navCtrl.navigateForward('/empleados', {
      queryParams: { empleado: JSON.stringify(trabajador) }
    });
  }
}
