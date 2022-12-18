import { Injectable } from '@angular/core';


const getWindow = () => {
  return window
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor() { }

  get nativeWindow(): any {
    return getWindow()
  }
}
