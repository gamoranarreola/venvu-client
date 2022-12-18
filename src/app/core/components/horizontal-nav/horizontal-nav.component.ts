import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Auth0UserProfile } from '../../models/auth0-user-profile';
import { Auth0UserProfileStore } from '../../state/stores/auth0-user-profile.store';
import { AccountStore } from '../../state/stores/account.store';
import { Account } from '../../models/account';


@Component({
  selector: 'vvu-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss']
})
export class HorizontalNavComponent implements OnInit, OnDestroy {

  public account!: Account | undefined;
  public auth0UserProfile!: Auth0UserProfile | undefined;

  private readonly subscriptions = new Subscription()

  constructor(
    private accountStore: AccountStore,
    private auth0UserProfileStore: Auth0UserProfileStore,
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.accountStore.load().subscribe(data => {
        if (data) {
          this.account = data
        }
      })
    )

    this.subscriptions.add(
      this.auth0UserProfileStore.load().pipe(
        switchMap(() => {
          return this.auth0UserProfileStore.auth0UserProfile$
        })
      ).subscribe(data => {
        if (data) {
          this.auth0UserProfile = data
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
