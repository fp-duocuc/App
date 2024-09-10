import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    const loginResult = this.authService.login(email, password);

    if (loginResult === 'success') {
      this.navCtrl.navigateForward('/compra');
    } else if (loginResult === 'userNotFound') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'El usuario no existe.',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (loginResult === 'incorrectPassword') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Contraseña incorrecta.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
