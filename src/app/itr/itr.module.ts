import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ITRPageRoutingModule } from './itr-routing.module';

import { ITRPage } from './itr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ITRPageRoutingModule
  ],
  declarations: [ITRPage]
})
export class ITRPageModule {}
