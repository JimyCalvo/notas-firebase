import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEstudiantePageRoutingModule } from './crear-estudiante-routing.module';

import { CrearEstudiantePage } from './crear-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearEstudiantePageRoutingModule
  ],
  declarations: [CrearEstudiantePage]
})
export class CrearEstudiantePageModule {}
