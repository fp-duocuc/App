import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public loggedInUser: string | null = null;

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/seguridad');
  }
}
