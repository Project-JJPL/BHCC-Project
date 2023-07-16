import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientInfoPage } from './patient-info.page';

const routes: Routes = [
  {
    path: '',
    component: PatientInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientInfoPageRoutingModule {}
