import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'f/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'a',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'f',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'f/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
