import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyProfileEditComponent } from './components/company-profile-edit/company-profile-edit.component';
import { CompanyProfileViewComponent } from './components/company-profile-view/company-profile-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CompanyProfileEditComponent
  },
  {
    path: 'view',
    component: CompanyProfileViewComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyProfileRoutingModule { }
