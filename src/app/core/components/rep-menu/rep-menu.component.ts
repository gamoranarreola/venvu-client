import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Account } from '../../models/account';

import { AccountStore } from '../../state/stores/account.store';

@Component({
  selector: 'vvu-rep-menu',
  templateUrl: './rep-menu.component.html',
  styleUrls: ['./rep-menu.component.scss']
})
export class RepMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  account?: Account;

  constructor(private accountStore: AccountStore) { }

  ngOnInit(): void {

    this.accountStore.load().subscribe((data: Account) => {
      this.account = data;

      this.menuItems = [
        {
          label: "Projects",
          icon: "pi pi-folder",
          items: [
            { label: "Create New", icon: "pi pi-plus" },
            { label: "View All Projects", icon: "pi pi-folder-open" },
          ],
        },
        {
          label: "Vendor Directory",
          icon: "pi pi-list",
          items: [
            { label: "New Search", icon: "pi pi-search" },
            { label: "Saved Searches", icon: "pi pi-database" },
          ],
        },
        {
          label: "Technical Library",
          icon: "pi pi-book",
          items: [
            { label: "New Search", icon: "pi pi-search" },
            { label: "All Checkouts", icon: "pi pi-bars" },
            { label: "Recent Checkouts", icon: "pi pi-file" },
          ],
        },
        {
          label: "Engagement Manager",
          icon: "pi pi-comments",
          items: [
            { label: "Post a Need", icon: "pi pi-pencil" },
            { label: "View Communications", icon: "pi pi-eye" },
          ],
        },
      ];
    });
  }

}
