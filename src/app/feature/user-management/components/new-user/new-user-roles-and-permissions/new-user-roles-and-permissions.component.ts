import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { isEmpty } from 'lodash';

import { Account } from 'src/app/core/models/account';
import { RolesService } from 'src/app/core/services/roles.service';
import { AccountStore } from 'src/app/core/state/stores/account.store';
import { AccountSetupService } from 'src/app/core/services/account-setup.service';


@Component({
  selector: 'vvu-roles-permissions',
  templateUrl: './new-user-roles-and-permissions.component.html',
  styleUrls: ['./new-user-roles-and-permissions.component.scss']
})
export class NewUserRolesAndPermissionsComponent implements OnInit, OnDestroy {

  roles$: any
  newUser: any
  account$!: Account

  private readonly subscriptions = new Subscription()

  constructor(
    private rolesService: RolesService,
    private accountStore: AccountStore,
    private router: Router
  ) { }

  prev(): void {
    this.router.navigate(['f/new-user/email'])
  }

  next(): void {
    this.router.navigate(['f/new-user/user-profile'])
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.accountStore.load().pipe(
        switchMap(() => {
          const accountType = this.accountStore.get()?.account_type === '_CNS' ? 'Consumer' : 'Vendor'
          return this.rolesService.loadRoles(accountType)
        })
      ).subscribe((res: HttpResponse<any>) => this.account$ = res.body.data)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
