import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'vvu-account-roles',
  templateUrl: './account-roles.component.html',
  styleUrls: ['./account-roles.component.scss']
})
export class AccountRolesComponent implements OnInit {

  constructor(private router: Router) { }

  prev(): void {
    this.router.navigate(['f/account-setup/admin-info'])
  }

  next(): void {
    this.router.navigate(['f/account-setup/company-verification'])
  }

  ngOnInit(): void {
  }

}
