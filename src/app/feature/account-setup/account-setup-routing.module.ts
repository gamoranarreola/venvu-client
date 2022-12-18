import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRolesComponent } from './components/account-roles/account-roles.component';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { CompanyVerificationComponent } from './components/company-verification/company-verification.component';


const routes: Routes = [
  {
    path: '',
    component: AccountSetupComponent,
    children: [
      {
        path: '',
        redirectTo: 'account-type',
        pathMatch: 'full'
      },
      {
        path: 'account-type',
        component: AccountTypeComponent
      },
      {
        path: 'admin-info',
        component: AdminInfoComponent
      },
      {
        path: 'account-roles',
        component: AccountRolesComponent
      },
      {
        path: 'company-verification',
        component: CompanyVerificationComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSetupRoutingModule { }
