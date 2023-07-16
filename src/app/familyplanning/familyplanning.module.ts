import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyplanningPageRoutingModule } from './familyplanning-routing.module';

import { FamilyplanningPage } from './familyplanning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyplanningPageRoutingModule
  ],
  declarations: [FamilyplanningPage]
})
export class FamilyplanningPageModule {}
