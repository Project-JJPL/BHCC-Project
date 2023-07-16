import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientInfoPageRoutingModule } from './patient-info-routing.module';

import { PatientInfoPage } from './patient-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientInfoPageRoutingModule
  ],
  declarations: [PatientInfoPage]
})
export class PatientInfoPageModule {}
