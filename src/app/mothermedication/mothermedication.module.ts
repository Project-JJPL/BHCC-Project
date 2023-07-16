import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MothermedicationPageRoutingModule } from './mothermedication-routing.module';

import { MothermedicationPage } from './mothermedication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MothermedicationPageRoutingModule
  ],
  declarations: [MothermedicationPage]
})
export class MothermedicationPageModule {}
