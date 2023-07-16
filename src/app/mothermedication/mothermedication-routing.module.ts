import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MothermedicationPage } from './mothermedication.page';

const routes: Routes = [
  {
    path: '',
    component: MothermedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MothermedicationPageRoutingModule {}
