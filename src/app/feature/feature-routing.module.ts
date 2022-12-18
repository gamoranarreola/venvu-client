import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
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
    path: 'create-new-user',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
