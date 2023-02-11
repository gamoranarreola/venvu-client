import { Component, OnInit } from "@angular/core";

import { environment as env } from "src/environments/environment";
import { AuthService } from "@auth0/auth0-angular";
import { MenuItem } from "primeng/api";

@Component({
  selector: "vvu-account-menu",
  templateUrl: "./account-menu.component.html",
  styleUrls: ["./account-menu.component.scss"],
})
export class AccountMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  ngOnInit(): void {
    this.menuItems = [
      {
        icon: "pi pi-cog",
        items: [
          { label: "Support", icon: "pi pi-question-circle" },
          { label: "Terms of Usage", icon: "pi pi-info-circle" },
          {
            label: "Logout",
            command: (event) => {
              this.logout();
            },
            icon: "pi pi-power-off",
          },
        ],
      },
    ];
  }
}
