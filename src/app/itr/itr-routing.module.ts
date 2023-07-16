import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ITRPage } from './itr.page';

const routes: Routes = [
  {
    path: '',
    component: ITRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ITRPageRoutingModule {}
