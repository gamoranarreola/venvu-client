import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AccountSetupComponent } from './components/account-setup/account-setup.component';
import { AccountSetupRoutingModule } from './account-setup-routing.module';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { CompanyVerificationComponent } from './components/company-verification/company-verification.component';
import { AccountRolesComponent } from './components/account-roles/account-roles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AccountSetupComponent,
    AccountTypeComponent,
    AdminInfoComponent,
    CompanyVerificationComponent,
    AccountRolesComponent
  ],
  exports: [
    AccountSetupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountSetupRoutingModule,
    StepsModule,
    ToastModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    SharedModule
  ]
})
export class AccountSetupModule { }
