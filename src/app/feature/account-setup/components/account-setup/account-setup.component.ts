import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'vvu-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss']
})
export class AccountSetupComponent implements OnInit {

  items!: MenuItem[]

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Choose Account Type',
        routerLink: 'account-type'
      },
      {
        label: 'Admin Info',
        routerLink: 'admin-info'
      },
      {
        label: 'Role Selection',
        routerLink: 'account-roles'
      },
      {
        label: 'Company Signup',
        routerLink: 'company-verification'
      }
    ]
  }

}
