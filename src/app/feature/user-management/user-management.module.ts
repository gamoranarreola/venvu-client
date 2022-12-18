import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { CreateNewUserComponent } from './components/new-user/create-new-user/create-new-user.component';
import { NewUserRolesAndPermissionsComponent } from './components/new-user/new-user-roles-and-permissions/new-user-roles-and-permissions.component';
import { NewUserProfileComponent } from './components/new-user/new-user-profile/new-user-profile.component';
import { ActivateNewUserComponent } from './components/new-user/activate-new-user/activate-new-user.component';
import { NewUserEmailComponent } from './components/new-user/new-user-email/new-user-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CreateNewUserComponent,
    NewUserRolesAndPermissionsComponent,
    NewUserProfileComponent,
    ActivateNewUserComponent,
    NewUserEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
