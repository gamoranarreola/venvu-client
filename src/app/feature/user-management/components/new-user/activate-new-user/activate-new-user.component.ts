import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountSetupService } from 'src/app/core/services/account-setup.service';

@Component({
  selector: 'vvu-activate-new-user',
  templateUrl: './activate-new-user.component.html',
  styleUrls: ['./activate-new-user.component.scss']
})
export class ActivateNewUserComponent implements OnInit, OnDestroy {

  accountSetup: any

  private readonly subscriptions = new Subscription()

  constructor(
    private accountSetupService: AccountSetupService,
    private router: Router
  ) { }

  prev(): void {
    this.router.navigate(['f/new-user/roles-and-permissions'])
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
