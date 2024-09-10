import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onRegister() {
    const { email, password, confirmPassword } = this.registroForm.value;

    if (password !== confirmPassword) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const registroExitoso = this.authService.register(email, password);

    if (registroExitoso) {
      const alert = await this.alertCtrl.create({
        header: 'Registro exitoso',
        message: 'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
        buttons: ['OK'],
      });
      await alert.present();
      this.navCtrl.navigateForward('/seguridad'); // Redirigir a la página de Login
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Este correo ya está registrado.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
