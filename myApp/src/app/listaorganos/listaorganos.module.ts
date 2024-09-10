import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaorganosPageRoutingModule } from './listaorganos-routing.module';

import { ListaorganosPage } from './listaorganos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaorganosPageRoutingModule
  ],
  declarations: [ListaorganosPage]
})
export class ListaorganosPageModule {}
