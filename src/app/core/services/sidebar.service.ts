import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public visible: Observable<boolean> = this._visible$.asObservable();

  constructor() { }

  show(): void {
    this._visible$.next(true);
  }

  hide(): void {
    this._visible$.next(false);
  }

}
