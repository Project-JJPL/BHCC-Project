import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyplanningPage } from './familyplanning.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyplanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyplanningPageRoutingModule {}
