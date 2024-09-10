import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service'; // Asegúrate de importar AuthService
import { CarritoService } from './carrito.service'; // Asegúrate de importar CarritoService

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,  // Añade AuthService en providers
    CarritoService // Añade CarritoService en providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
