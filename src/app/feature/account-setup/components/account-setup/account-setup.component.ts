import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "vvu-account-setup",
  templateUrl: "./account-setup.component.html",
  styleUrls: ["./account-setup.component.scss"],
})
export class AccountSetupComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Account Type",
        routerLink: "account-type",
      },
      {
        label: "Admin Info",
        routerLink: "admin-info",
      },
      {
        label: "Admin Roles",
        routerLink: "account-roles",
      },
      {
        label: "Company Info",
        routerLink: "company-verification",
      },
    ];
  }
}
