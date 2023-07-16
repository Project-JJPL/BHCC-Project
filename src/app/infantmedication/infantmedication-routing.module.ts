import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantmedicationPage } from './infantmedication.page';

const routes: Routes = [
  {
    path: '',
    component: InfantmedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantmedicationPageRoutingModule {}
