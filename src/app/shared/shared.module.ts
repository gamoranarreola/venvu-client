import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

import { IndustrySelectorComponent } from './components/industry-selector/industry-selector.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { EmployeeCountRangeSelectorComponent } from './components/employee-count-range-selector/employee-count-range-selector.component';
import { YearlyRevenueRangeSelectorComponent } from './components/yearly-revenue-range-selector/yearly-revenue-range-selector.component';
import { CompanyTypeSelectorComponent } from './components/company-type-selector/company-type-selector.component';
import { KeyChipsComponent } from './components/key-chips/key-chips.component';
import { ChipsModule } from 'primeng/chips';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    IndustrySelectorComponent,
    CountrySelectorComponent,
    EmployeeCountRangeSelectorComponent,
    YearlyRevenueRangeSelectorComponent,
    CompanyTypeSelectorComponent,
    KeyChipsComponent,
    RoleSelectionComponent
  ],
  exports: [
    IndustrySelectorComponent,
    CountrySelectorComponent,
    EmployeeCountRangeSelectorComponent,
    YearlyRevenueRangeSelectorComponent,
    CompanyTypeSelectorComponent,
    KeyChipsComponent,
    RoleSelectionComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    CardModule,
    CheckboxModule
  ]
})
export class SharedModule { }
