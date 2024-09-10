import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarritoService } from './carrito.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/seguridad', icon: 'log-in' },
    { title: 'Registro', url: '/registro', icon: 'person-add' },
    { title: 'Compra', url: '/compra', icon: 'cart' },
    { title: 'Lista de Órganos', url: '/listaorganos', icon: 'musical-notes' },
    { title: 'Mi Perfil', url: '/perfil', icon: 'person' }
  ];

  public loggedInUser: string | null;

  constructor(
    private navCtrl: NavController,
    private carritoService: CarritoService,
    private authService: AuthService
  ) {
    this.loggedInUser = this.authService.getLoggedInUser();

    // Suscribirse a cambios de estado de autenticación
    this.authService.cambioDeEstado.subscribe(() => {
      this.loggedInUser = this.authService.getLoggedInUser();
      this.updateMenu();
    });

    // Llamada inicial para configurar el menú en función del estado de inicio de sesión
    this.updateMenu();
  }

  get cantidadCarrito() {
    return this.carritoService.obtenerCantidadCarrito();
  }

  irAlCarrito() {
    this.navCtrl.navigateForward('/compra');
  }

  logout() {
    this.authService.logout();
    this.loggedInUser = null;
    this.updateMenu();
    this.navCtrl.navigateRoot('/seguridad');
  }

  // Actualiza el menú dependiendo del usuario logueado
  private updateMenu() {
    if (this.loggedInUser === 'admin@example.com') {
      this.appPages.push(
        { title: 'Historial sucursales', url: '/sucursales', icon: 'receipt' }
      );
    } else {
      // Si el usuario no es admin, removemos las páginas de admin si existían
      this.appPages = this.appPages.filter(page =>
        page.title !== 'Empleados' && 
        page.title !== 'Productos' && 
        page.title !== 'Despachos' &&
        page.title !== 'Historial sucursales'
      );
    }
  }
}
