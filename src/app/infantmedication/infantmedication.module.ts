import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantmedicationPageRoutingModule } from './infantmedication-routing.module';

import { InfantmedicationPage } from './infantmedication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantmedicationPageRoutingModule
  ],
  declarations: [InfantmedicationPage]
})
export class InfantmedicationPageModule {}
