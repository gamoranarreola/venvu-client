import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Auth0UserProfile } from '../../models/auth0-user-profile';
import { NavConfig } from '../../models/nav-config';
import { SidebarService } from '../../services/sidebar.service';
import { VerticalNavService } from '../../services/vertical-nav.service';
import { Auth0UserProfileStore } from '../../state/stores/auth0-user-profile.store';

@Component({
  selector: 'vvu-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss']
})
export class VerticalNavComponent implements OnInit, OnDestroy {

  public auth0UserProfile!: Auth0UserProfile;
  public navConfig!: NavConfig;

  private readonly subscriptions = new Subscription();

  constructor(
    private auth0UserProfileStore: Auth0UserProfileStore,
    private verticalNavService: VerticalNavService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.auth0UserProfileStore.load().pipe(
        switchMap(() => {
          return this.auth0UserProfileStore.auth0UserProfile$;
        })
      ).subscribe(data => {
        if (data) {
          this.auth0UserProfile = data;
          this.navConfig = this.verticalNavService.getNavConfig(this.auth0UserProfile.roles);
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
