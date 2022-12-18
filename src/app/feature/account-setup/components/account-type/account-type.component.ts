import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountSetupService } from '../../account-setup.service';


@Component({
  selector: 'vvu-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit, OnDestroy {

  accountSetup: any

  private readonly subscriptions = new Subscription()

  constructor(
    private accountSetupService: AccountSetupService,
    private router: Router
  ) { }

  setAccountType(value: string): void {
    this.accountSetupService.setState({account_type: value})
  }

  next(): void {
    if (this.accountSetup.account_type !== null) {
      this.router.navigate(['f/account-setup/admin-info'])
    }
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.accountSetupService.accountSetup$.subscribe(data => this.accountSetup = data)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
