import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'company-profile',
    loadChildren: () => import('./company-profile/company-profile.module').then(m => m.CompanyProfileModule)
  },
  {
    path: 'account-setup',
    loadChildren: () => import('./account-setup/account-setup.module').then(m => m.AccountSetupModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'not-verified',
    loadChildren: () => import('./not-verified/not-verified.module').then(m => m.NotVerifiedModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
