import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { OlvidePageRoutingModule } from './olvide-routing.module';
import { OlvidePage } from './olvide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    OlvidePageRoutingModule
  ],
  declarations: [OlvidePage]
})
export class OlvidePageModule {}
