import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { CompanyProfileEditComponent } from './components/company-profile-edit/company-profile-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CompanyProfileViewComponent } from './components/company-profile-view/company-profile-view.component';


@NgModule({
  declarations: [
    CompanyProfileEditComponent,
    CompanyProfileViewComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    ButtonModule,
    SharedModule
  ]
})
export class CompanyProfileModule { }
