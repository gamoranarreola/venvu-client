import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateNewUserComponent } from './components/new-user/activate-new-user/activate-new-user.component';
import { CreateNewUserComponent } from './components/new-user/create-new-user/create-new-user.component';
import { NewUserRolesAndPermissionsComponent } from './components/new-user/new-user-roles-and-permissions/new-user-roles-and-permissions.component';
import { NewUserEmailComponent } from './components/new-user/new-user-email/new-user-email.component';
import { NewUserProfileComponent } from './components/new-user/new-user-profile/new-user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNewUserComponent,
    children: [
      {
        path: '',
        redirectTo: 'email',
        pathMatch: 'full'
      },
      {
        path: 'email',
        component: NewUserEmailComponent
      },
      {
        path: 'roles-and-permissions',
        component: NewUserRolesAndPermissionsComponent
      },
      {
        path: 'profile',
        component: NewUserProfileComponent
      },
      {
        path: 'activate',
        component: ActivateNewUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
