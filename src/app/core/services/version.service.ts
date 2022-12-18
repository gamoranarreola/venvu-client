import { Injectable } from '@angular/core';

// @ts-ignore
import * as packageJson from '../../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  readonly version: string;

  constructor() {
    this.version = packageJson.version;
  }

  public getVersion(): string {
    return this.version;
  }
}
