import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'itr',
    loadChildren: () => import('./itr/itr.module').then( m => m.ITRPageModule)
  },
  {
    path: 'patient-info',
    loadChildren: () => import('./patient-info/patient-info.module').then( m => m.PatientInfoPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'mothermedication',
    loadChildren: () => import('./mothermedication/mothermedication.module').then( m => m.MothermedicationPageModule)
  },
  {
    path: 'infantmedication',
    loadChildren: () => import('./infantmedication/infantmedication.module').then( m => m.InfantmedicationPageModule)
  },
  {
    path: 'familyplanning',
    loadChildren: () => import('./familyplanning/familyplanning.module').then( m => m.FamilyplanningPageModule)
  },
  {
    path: 'adultmedication',
    loadChildren: () => import('./adultmedication/adultmedication.module').then( m => m.AdultmedicationPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then( m => m.DevelopersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
