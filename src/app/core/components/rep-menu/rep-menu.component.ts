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
          label: 'Projects',
          items: [
            { label: 'Create New' },
            { label: 'View All Projects' }
          ]
        },
        {
          label: 'Vendor Directory',
          items: [
            { label: 'New Search' },
            { label: 'Saved Searches' }
          ]
        },
        {
          label: 'Technical Library',
          items: [
            { label: 'New Search' },
            { label: 'All Checkouts' },
            { label: 'Recent Checkouts' }
          ]
        },
        {
          label: 'Engagement Manager',
          items: [
            { label: 'Post a Need' },
            { label: 'View Communications' }
          ]
        }
      ];
    });
  }

}
