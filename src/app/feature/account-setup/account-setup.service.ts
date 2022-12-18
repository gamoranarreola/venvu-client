import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountSetupService {

  private _accountSetup$: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public accountSetup$: Observable<any> = this._accountSetup$.asObservable()

  constructor() {

    this._accountSetup$.next({
      account_type: '',
      allRoles: [],
      selectedRoleNames: [],
      adminInfo: {},
      companyProfile: {}
    })
  }

  setState(partialState: any): void {

    this._accountSetup$.next(
      Object.assign(
        {},
        this._accountSetup$.getValue(),
        partialState
      )
    )
  }
}
