import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage {

  constructor(private navCtrl: NavController) { }

  irAVentas() {
    this.navCtrl.navigateForward('/ventas');
  }
}
