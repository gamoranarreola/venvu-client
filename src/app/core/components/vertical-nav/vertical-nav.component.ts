import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Account } from '../../models/account';

import { Auth0UserProfile } from '../../models/auth0-user-profile';
import { NavConfig } from '../../models/nav-config';
import { VerticalNavService } from '../../services/vertical-nav.service';
import { AccountStore } from '../../state/stores/account.store';
import { Auth0UserProfileStore } from '../../state/stores/auth0-user-profile.store';

@Component({
  selector: 'vvu-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit, OnDestroy {

  public auth0UserProfile!: Auth0UserProfile
  public account!: Account
  public navConfig!: NavConfig

  private readonly subscriptions = new Subscription();

  constructor(
    private auth0UserProfileStore: Auth0UserProfileStore,
    private accountStore: AccountStore,
    private verticalNavService: VerticalNavService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.auth0UserProfileStore.load().pipe(
        switchMap(() => {
          return this.auth0UserProfileStore.auth0UserProfile$
        })
      ).subscribe(data => {
        if (data) {
          this.auth0UserProfile = data
          this.navConfig = this.verticalNavService.getNavConfig(this.auth0UserProfile.roles)
        }
      })
    )

    this.subscriptions.add(
      this.accountStore.load().subscribe(data => {
        if (data) {
          this.account = data
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
