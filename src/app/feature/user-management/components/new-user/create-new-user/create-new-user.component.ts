import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'vvu-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent implements OnInit {

  items!: MenuItem[]

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Email',
        routerLink: 'email'
      },
      {
        label: 'Roles and Permissions',
        routerLink: 'roles-and-permissions'
      },
      {
        label: 'Create User Profile',
        routerLink: 'user-profile'
      },
      {
        label: 'Activate',
        routerLink: 'activate'
      }
    ]
  }

}
