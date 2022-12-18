import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers!: HttpHeaders;

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @param url
   * @param method
   * @param params
   */
  public get(url: string, method: string, params?: any): Observable<any> {

    let request!: Observable<any>;

    const headers: any = {
      'Content-Type': 'application/json'
    };

    this.headers = new HttpHeaders(headers);

    if (method === 'get') {
      request = this.httpClient.get<any[]>(`${env.apiHost}${url}`, {
        observe: 'response',
        headers: this.headers
      });
    }

    if (method === 'post') {
      request = this.httpClient.post<any[]>(`${env.apiHost}${url}`, params, {
        observe: 'response',
        headers: this.headers
      });
    }

    return request
      .pipe(
        map((res: HttpResponse<any>) => res)
      );
  }

  /**
   *
   */
  public post(url: string, params?: any): Observable<any> {

    const headers: any = {
      'Content-Type': 'application/json'
    };

    this.headers = new HttpHeaders(headers);

    return this.httpClient.post<any[]>(`${env.apiHost}${url}`, params, {
      observe: 'response',
      headers: this.headers
    }).pipe(
      map((res: HttpResponse<any>) => res)
    );
  }

  /**
   *
   * @param url
   * @param params
   */
  public patch(url: string, params?: any): Observable<any> {

    const headers: any = {
      'Content-Type': 'application/json'
    };

    this.headers = new HttpHeaders(headers);

    return this.httpClient.patch<any[]>(`${env.apiHost}${url}`, params, {
      observe: 'response',
      headers: this.headers
    }).pipe(
      map((res: HttpResponse<any>) => res)
    );
  }

}
