import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AccountStoreState } from '../states/account.store.state';
import { Store } from './store';
import { AccountEndpoint } from '../endpoints/account.endpoint';
import { Account } from '../../models/account';


@Injectable({
  providedIn: 'root'
})
export class AccountStore extends Store<AccountStoreState> {

  account$: Observable<Account | undefined>;

  constructor(private accountEndpoint: AccountEndpoint) {

    super(new AccountStoreState());

    this.account$ = this.state$.pipe(
      map(state => state.account!)
    )
  }

  get(): Account | undefined {
    return this.state.account;
  }

  load(): Observable<Account> {

    return this.accountEndpoint.getAccount().pipe(
      tap((account: Account) => {
        this.setState({
          ...this.state,
          account: account
        });
      })
    )
  }

  clearUser(): void {

    this.setState({
      ...this.state,
      account: undefined
    })
  }

}
