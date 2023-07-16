import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultmedicationPage } from './adultmedication.page';

const routes: Routes = [
  {
    path: '',
    component: AdultmedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultmedicationPageRoutingModule {}
