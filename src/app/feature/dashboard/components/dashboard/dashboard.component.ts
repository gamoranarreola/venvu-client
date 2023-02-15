import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { Account } from 'src/app/core/models/account';
import { AccountStore } from 'src/app/core/state/stores/account.store';


@Component({
  selector: 'vvu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  account!: Account | undefined

  constructor(
    private accountStore: AccountStore,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.accountStore.load().subscribe((data: Account) => {

      this.account = data

      if (!this.account.account_type) {
        this.router.navigate(['f/account-setup'])

        this.messageService.add({
          severity: 'info',
          summary: 'Account Setup',
          detail: 'You\'ve been redirected to the account setup page to complete some required information.',
          sticky: true
        })
      } else if (this.account.account_type && !this.account.is_tax_id_verified) {
        this.router.navigate(['f/not-verified'])
      }
    })
  }

}
