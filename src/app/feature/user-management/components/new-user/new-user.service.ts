import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  private _newUserSetup$: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public newUserSetup$: Observable<any> = this._newUserSetup$.asObservable()

  constructor() {
    this._newUserSetup$.next({
      email_address: '',
      roles: [],
      user_profile: {},
      auth0_available: false
    })
  }

  setState(partialState: any): void {
    this._newUserSetup$.next(
      Object.assign(
        {},
        this._newUserSetup$.getValue(),
        partialState
      )
    )
  }
}
